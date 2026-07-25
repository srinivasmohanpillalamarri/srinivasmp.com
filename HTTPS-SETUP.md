# Turning on HTTPS for srinivasmp.com

Plain-English steps. Do them in order — step 1 is the one that's actually broken,
and a certificate installed before it is done will appear to "not work".

**What we know about your server**

| | |
|---|---|
| Address | `20.244.1.124` (a Microsoft Azure machine) |
| Web server | Microsoft IIS 10 |
| Port 80 (insecure) | Open — this is why the old page still loads |
| Port 443 (secure) | **Closed** — this is the problem |
| DNS | Already correct, pointing at the machine |

---

## Step 1 — Open the secure door (Azure)

Right now the machine simply refuses secure connections. Nothing is listening.

1. Go to **portal.azure.com** and sign in.
2. In the search bar at the top, type **Virtual machines** and open it.
3. Click the machine that runs the website.
4. In the left menu, under *Networking*, click **Network settings**.
5. Click **Create port rule** → **Inbound port rule**.
6. Fill in only these:
   - **Destination port ranges:** `443`
   - **Protocol:** TCP
   - **Action:** Allow
   - **Priority:** `310` (or any free number below 400)
   - **Name:** `Allow-HTTPS`
7. Click **Add**. It takes about 30 seconds to apply.

## Step 2 — Open the same door in Windows

Log into the server (Remote Desktop), open **PowerShell as Administrator**, and paste:

```powershell
New-NetFirewallRule -DisplayName "HTTPS-In" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow
```

## Step 3 — Check the door is actually open

From **your own laptop**, not the server:

```bash
curl -sI --max-time 10 https://srinivasmp.com
```

- If you get an error mentioning **certificate** — the door is open. Continue to step 4.
- If it times out or says *connection refused* — the door is still shut. Re-check steps 1 and 2.

> This distinction matters. A certificate error means you have made progress.

## Step 4 — Get the free certificate

We'll use **win-acme**, the standard free tool for IIS. It gets a certificate from
Let's Encrypt, installs it, and renews it automatically every 90 days so you never
have to think about it again.

1. Download it on the server: <https://www.win-acme.com/> → *Download* → the
   `win-acme.v2.x.x.x64.pluggable.zip` file.
2. Unzip it somewhere permanent, e.g. `C:\win-acme`. **Do not** put it in
   Downloads — it needs to stay put for automatic renewals to work.
3. Right-click `wacs.exe` → **Run as administrator**.
4. Answer the prompts:
   - `N` — Create certificate (default settings)
   - Pick your website from the numbered list, type its number, press Enter
   - Enter your email when asked (used only for expiry warnings)
   - `y` — accept the terms

It will verify you own the domain, install the certificate, bind it to port 443,
and create a scheduled task for renewal. Takes about a minute.

## Step 5 — Send everyone to the secure version

Visitors typing the old insecure address should be moved across automatically.

In **IIS Manager**: select your site → **URL Rewrite**.

> No URL Rewrite icon? Install it first from
> <https://www.iis.net/downloads/microsoft/url-rewrite>, then reopen IIS Manager.

Add rule → **Blank rule**:

| Field | Value |
|---|---|
| Name | `Redirect to HTTPS` |
| Match URL → Pattern | `(.*)` |
| Conditions → Add | Input `{HTTPS}`, Pattern `^OFF$` |
| Action type | Redirect |
| Redirect URL | `https://{HTTP_HOST}/{R:1}` |
| Redirect type | **Permanent (301)** |

Click **Apply**.

> Use **Permanent (301)**, not Found (302). A permanent redirect passes your
> search ranking across to the secure address; a temporary one does not.

## Step 6 — Confirm it all worked

From your own laptop:

```bash
curl -sI https://srinivasmp.com | head -3
```

You want `HTTP/1.1 200 OK` or `HTTP/2 200`. Then check the redirect:

```bash
curl -sI http://srinivasmp.com | grep -i location
```

You want to see `Location: https://srinivasmp.com/`.

Finally, open <https://srinivasmp.com> in a browser and check for the padlock.

---

## After HTTPS is live

Only once the padlock appears, these become possible:

1. **Deploy the new site.** The Azure DevOps pipeline is ready at
   `.azure-pipelines/website.yml` — it still needs your build agent pool name
   filling in where it currently says `SrinivasMP-VM-Pool`.
2. **Tell Google it exists.** Go to <https://search.google.com/search-console>,
   add `srinivasmp.com`, verify ownership, then submit
   `https://srinivasmp.com/sitemap.xml`.
3. **Tell Bing too** — <https://www.bing.com/webmasters>. Bing indexes new small
   sites much faster than Google, and Bing is what Microsoft Copilot reads. This
   is your quickest route to appearing in an AI assistant.

## One warning

If you are ever tempted to put the site behind **Cloudflare** for a quicker
certificate — it works, but check its bot settings afterwards. New Cloudflare
accounts can block AI crawlers by default, which would silently undo the whole
AI-visibility setup we just built into `robots.txt`.
