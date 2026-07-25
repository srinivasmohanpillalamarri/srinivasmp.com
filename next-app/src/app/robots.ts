import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

/**
 * AI crawlers are explicitly allowed, including training crawlers.
 *
 * The trade-off is real: training crawlers let a model state these facts
 * without linking back. For a publisher selling pageviews that is a loss.
 * For a personal brand it inverts — being *stated* accurately is the goal,
 * and blocking GPTBot would not stop models describing him anyway; they
 * would just learn it from LinkedIn and GitHub instead, without his framing.
 */
const AI_AGENTS = [
  'GPTBot',            // OpenAI training
  'OAI-SearchBot',     // ChatGPT search index
  'ChatGPT-User',      // user-initiated fetch
  'ClaudeBot',         // Anthropic training
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',   // usage token for Gemini grounding, not a crawler
  'Applebot-Extended',
  'CCBot',             // Common Crawl — feeds many smaller training pipelines
  'Meta-ExternalAgent',
  'Bingbot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_AGENTS.map(userAgent => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://srinivasmp.com/sitemap.xml',
    host: 'https://srinivasmp.com',
  };
}
