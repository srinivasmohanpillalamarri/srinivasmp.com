export type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
};

/** Motif drawn beside the project — see components/ProjectVisual.tsx */
export type ProjectMotif =
  | 'test-matrix'
  | 'conversation'
  | 'voice'
  | 'database'
  | 'migration'
  | 'network'
  | 'schema';

export type Project = {
  title: string;
  blurb: string;
  context?: string;
  stack: string[];
  outcomes: string[];
  visual: ProjectMotif;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Brand = {
  name: string;
  file: string;
};

export const profile = {
  name: 'Srinivas Mohan Pillalamarri',
  shortName: 'Srinivas M. P.',
  title: 'VP Technical · AI Solutions Architect · Full-Stack Engineer',
  blurb:
    'I build production AI platforms and the systems that ship them — chatbots, voice-driven survey tools, customer-service apps, and large-scale ERPs. 30 years in technology, 20+ of them building software across BFSI, Retail, Logistics, HRMS, and ERP.',
  /** ≤160 chars — anything longer is truncated in search results. */
  metaDescription:
    'Software architect and VP Technical in Mumbai. 30 years in technology, 20+ building enterprise AI, Angular and .NET systems for banking and lending.',
  location: 'Mumbai, India',
  email: 'srinivasmp@hotmail.com',
  phone: '+91 8454813227',
  links: {
    linkedin: 'https://www.linkedin.com/in/mpsrinivas',
    github: 'https://github.com/srinivasmohanpillalamarri',
    site: 'https://srinivasmp.com'
  },
  resumePdf: '/resume.pdf'
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI / LLMs',
    items: ['Anthropic Claude', 'Azure OpenAI', 'ChatGPT', 'Oracle AI', 'Prompt engineering', 'RAG / KB design']
  },
  {
    label: 'Frontend',
    items: ['Angular (v8–v16)', 'TypeScript', 'Ionic', 'Kendo UI', 'Angular Material']
  },
  {
    label: 'Backend',
    items: ['.NET / C# (3.1–6)', 'Python', 'Entity Framework', 'RESTful APIs', 'Azure Functions']
  },
  {
    label: 'Data',
    items: ['SQL Server', 'Oracle PL/SQL', 'SSRS / SSIS / SSAS', 'Extended Events', 'Azure Tables']
  },
  {
    label: 'Cloud & Ops',
    items: ['Azure DevOps', 'Azure Storage / Blobs', 'AWS', 'Cognitive Services']
  },
  {
    label: 'Leadership',
    items: ['VP Technical · 196+ team', 'Multi-country delivery', 'Stakeholder management', 'Agile / Scrum']
  }
];

export const brands: Brand[] = [
  { name: 'Anthropic Claude', file: 'anthropic.svg' },
  { name: 'Microsoft Azure', file: 'microsoftazure.svg' },
  { name: 'OpenAI', file: 'openai.svg' },
  { name: 'Oracle', file: 'oracle.svg' },
  { name: 'Microsoft', file: 'microsoft.svg' },
  { name: 'AWS', file: 'amazonwebservices.svg' },
  { name: 'React', file: 'react.svg' },
  { name: 'React Native', file: 'reactnative.svg' },
  { name: 'Angular', file: 'angular.svg' },
  { name: 'TypeScript', file: 'typescript.svg' },
  { name: '.NET', file: 'dotnet.svg' },
  { name: 'C#', file: 'csharp.svg' },
  { name: 'Python', file: 'python.svg' },
  { name: 'SQL Server', file: 'microsoftsqlserver.svg' },
  { name: 'Ionic', file: 'ionic.svg' }
];

export const experience: Role[] = [
  {
    company: 'SK Finance Ltd.',
    role: 'VP – Technical',
    period: '2026 — Present',
    location: 'Mumbai, India',
    summary:
      'Leading two AI programmes: customer-service automation on Anthropic Claude, and SK Test Suite — an autonomous quality, security, and compliance platform for regulated lending applications.',
    highlights: [
      'End-to-end Customer Service App and Admin Portal on Anthropic Claude AI, integrated with legacy systems under strict security controls',
      'SK Test Suite — autonomous application discovery, AI test generation, and self-healing automation across web, mobile, and API',
      'Unified security and compliance assessment: OWASP Top 10, SAST/DAST, and RBI digital-lending validation in a single pipeline',
      'Lending-critical coverage from loan lifecycle and eKYC through UPI, NACH, ECS, and credit bureau integration',
      'Fraud and risk-rule validation alongside load, stress, and scalability testing',
      'Release-readiness scoring and executive dashboards wired into DevSecOps CI/CD'
    ],
    stack: [
      'Anthropic Claude', '.NET', 'Angular', 'Azure',
      'React', 'Next.js', 'Python', 'FastAPI', 'Playwright', 'Appium', 'MongoDB'
    ]
  },
  {
    company: 'Sonata Software Ltd.',
    role: 'Digital Project Manager',
    period: '2020 — 2026',
    location: 'Bangalore, India',
    summary:
      'AI platform R&D and large-scale Microsoft delivery — including a 196+ engineer WPF→Angular migration.',
    highlights: [
      'Coordinated 196+ engineers on the Microsoft Audit Platform WPF → Angular migration with no major delivery failures',
      'Architected a Self-Generative Chatbot Platform — reducing chatbot build time from weeks to minutes',
      'Built a multilingual VoC & CX Survey Tool with hands-free voice input (EN/JP/ZH) and AI-driven analytics',
      'Delivered Epicor Nucleus and Libertas for Prophet 21 — projected to eliminate 70% of long-run support overhead'
    ],
    stack: ['Anthropic', 'Azure OpenAI', 'ChatGPT', 'Oracle AI', '.NET 6', 'Angular v16', 'TypeScript', 'Python', 'Azure Functions']
  },
  {
    company: 'Focus Prism Pvt. Ltd.',
    role: 'Technical Lead',
    period: '2019 — 2020',
    location: 'Coimbatore / Hyderabad, India',
    highlights: [
      'Managed Hyderabad branch team across mobile and ERP projects',
      'Delivered multiple mobile apps and a complete ERP for the food & catering industry',
      'Sustained AWS deployments through COVID-19 with zero major incidents'
    ],
    stack: ['Angular v13', 'TypeScript', 'Kendo UI', 'Ionic', '.NET 3.1', 'AWS']
  },
  {
    company: 'Golden Arrow',
    role: 'Acting Group IT Manager',
    period: '2018 — 2019',
    location: 'Sudan',
    summary: 'Promoted from SQL Programmer to Acting Group IT Manager.',
    highlights: [
      'Designed a unified ERP from scratch covering 23 business verticals',
      'Managed full IT infrastructure and procurement across Sudan and South Sudan',
      'Consolidated multiple legacy ERPs into a single platform'
    ],
    stack: ['SQL Server', 'Oracle PL/SQL', '.NET']
  },
  {
    company: 'Alchemy System Pvt. Ltd.',
    role: 'Sr. Project Manager',
    period: '2015 — 2017',
    location: 'Mumbai, India',
    highlights: [
      '10+ engineer team through design, development, UAT, and go-live',
      'Implemented retail / service / maintenance ERP across Tanzania, Congo, and Mumbai',
      'Multi-currency financial management with real-time exchange-rate handling'
    ],
    stack: ['Magic XPA', 'C#.NET', 'MSSQL']
  },
  {
    company: 'Questec Consultancy',
    role: 'Team Lead',
    period: '2014 — 2015',
    location: 'Mumbai, India',
    highlights: [
      'Managed 1–3 TB production databases for Kotak / Fullerton',
      'Built scheduled report generation via SSRS, SSIS, SSAS',
      'Mail and SMS sender systems handling 500,000+ messages'
    ],
    stack: ['SQL', 'SSRS', '.NET']
  },
  {
    company: 'Osource Global',
    role: 'Project Manager',
    period: '2013 — 2014',
    location: 'Mumbai, India',
    highlights: [
      'HRMS and Payroll deployed across Marriott, Westin, Four Points, Celio',
      'Built mobile DMS for on-the-go document approvals'
    ],
    stack: ['.NET', 'SQL', 'Oracle PL/SQL']
  },
  {
    company: 'BasePro',
    role: 'Team Lead',
    period: '2008 — 2013',
    location: 'Bhiwandi, India',
    highlights: [
      '100+ implementations across Maharashtra over 5 years',
      'Production planning, fleet management, freight billing, route optimisation'
    ],
    stack: ['VB.NET', 'SQL', 'Oracle PL/SQL', 'VB6']
  },
  {
    company: 'Nelito Systems Ltd.',
    role: 'Software Developer',
    period: '2006 — 2008',
    location: 'Mumbai, India',
    highlights: [
      'Migrated Fincraft 4 GB schema from SQL Server to Oracle with zero data loss',
      'Modernised VB6 frontend to VB.NET',
      'Designed SLiM SDLC system supporting CMM Level 3 certification'
    ],
    stack: ['VB6', 'VB.NET', 'SQL Server', 'Oracle PL/SQL']
  }
];

export const projects: Project[] = [
  {
    title: 'SK Test Suite',
    blurb:
      'Autonomous AI quality engineering for regulated lending — discovers applications, generates coverage, and validates security and RBI compliance in a single pipeline.',
    context: 'SK Finance',
    stack: ['React', 'Next.js', 'Python', 'FastAPI', 'Playwright', 'Appium', 'MongoDB'],
    outcomes: [
      'Self-healing test automation across web, mobile, and API',
      'OWASP Top 10, SAST/DAST, and RBI digital-lending validation unified',
      'Lending workflow coverage from eKYC to UPI, NACH, and credit bureau',
      'Release-readiness scoring wired into DevSecOps CI/CD'
    ],
    visual: 'test-matrix'
  },
  {
    title: 'Self-Generative Chatbot Platform',
    blurb:
      'Auto-generates contextual chatbots from documents, audio, video, or text — embeddable via unique URL.',
    context: 'Sonata Software',
    stack: ['Anthropic', 'Azure OpenAI', 'ChatGPT', 'Oracle AI', 'Python', '.NET'],
    outcomes: [
      'Build time reduced from weeks to minutes',
      'Multi-AI provider redundancy across 4 vendors',
      'Plug-and-play embeddable URL deployment'
    ],
    visual: 'conversation'
  },
  {
    title: 'VoC & CX Survey Tool',
    blurb: 'Voice-enabled, multilingual survey platform with full branding customisation and AI-driven analytics.',
    context: 'Sonata Software',
    stack: ['Angular', '.NET', 'Azure OpenAI', 'Anthropic', 'ChatGPT'],
    outcomes: [
      'Hands-free voice input with AI follow-up questions',
      'EN / JP / ZH multilingual support',
      'Automated SQL reporting + sentiment analysis'
    ],
    visual: 'voice'
  },
  {
    title: 'Libertas — Cloud SQL Management',
    blurb:
      'Cloud-based SQL table creation, push/pull data transfers, and Extended Events query monitoring without DBA privileges.',
    context: 'Prophet 21 / Sonata',
    stack: ['.NET', 'SQL', 'Angular', 'Azure DevOps'],
    outcomes: [
      'Self-service database access for non-DBAs',
      'Real-time query monitoring via Extended Events',
      'Reduced operational dependency on DBA team'
    ],
    visual: 'database'
  },
  {
    title: 'Microsoft Audit Platform — WPF → Angular',
    blurb: 'Mission-critical enterprise auditing platform migrated to a modern browser-based architecture.',
    context: 'Microsoft / Sonata',
    stack: ['Angular', 'TypeScript', '.NET', 'Azure DevOps'],
    outcomes: [
      '196+ engineer team coordinated end-to-end',
      'Zero major delivery failures across the lifecycle',
      'Browser-based experience with feature parity'
    ],
    visual: 'migration'
  },
  {
    title: 'Retail / Service / Maintenance ERP',
    blurb: 'Multi-country retail ERP with POS, multi-currency, inventory, and workflow.',
    context: 'Alchemy System',
    stack: ['Magic XPA', 'C#.NET', 'MSSQL'],
    outcomes: [
      'Deployed across Tanzania, Congo, and Mumbai',
      'Real-time multi-currency financial handling',
      'Localised configurations per country'
    ],
    visual: 'network'
  },
  {
    title: 'Fincraft Banking Migration',
    blurb: '4 GB core banking schema migrated from SQL Server to Oracle with zero data loss.',
    context: 'Nelito Systems',
    stack: ['VB6', 'VB.NET', 'SQL Server', 'Oracle PL/SQL'],
    outcomes: [
      'Zero data loss across 4 GB production migration',
      'VB6 → VB.NET frontend modernisation',
      'SLiM SDLC system supporting CMM Level 3 certification'
    ],
    visual: 'schema'
  }
];

/* ── Achievement metrics ───────────────────────────────────────────
   Spec's six-category structure, populated only with figures that
   trace back to the experience entries above. No rounded-up claims. */
export type Metric = { value: string; label: string; note: string };

export const metrics: Metric[] = [
  { value: '30',   label: 'Years Experience',      note: 'In technology since 1996 · 20+ in software' },
  { value: '100+', label: 'Enterprise Projects',   note: 'Software implementations delivered' },
  { value: '196+', label: 'Engineering Leadership',note: 'Engineers led on one programme' },
  { value: '3',    label: 'AI Solutions Delivered',note: 'Claude, Azure OpenAI, Oracle AI' },
  { value: '23',   label: 'Platform Architectures',note: 'Business verticals unified' },
  { value: '4',    label: 'Automation Programs',   note: 'Countries delivered across' },
];

/* ── Expertise ─────────────────────────────────────────────────── */
export type Expertise = { title: string; blurb: string; items: string[] };

export const expertise: Expertise[] = [
  {
    title: 'Artificial Intelligence',
    blurb: 'Production LLM platforms — not prototypes. Retrieval design, prompt architecture, and multi-vendor redundancy.',
    items: ['Generative AI', 'LLMs', 'Agentic Systems', 'RAG / KB Design']
  },
  {
    title: 'Enterprise Architecture',
    blurb: 'Consolidating fragmented legacy estates into coherent platforms that survive a decade of change.',
    items: ['Scalable Platforms', 'Modernisation', 'Legacy Integration', 'System Design']
  },
  {
    title: 'Cloud Engineering',
    blurb: 'Azure-first distributed systems with the operational discipline to run them at enterprise scale.',
    items: ['Azure', 'AWS', 'Distributed Systems', 'Azure DevOps']
  },
  {
    title: 'Full-Stack Development',
    blurb: 'Hands-on across the stack — still writing the first prototype when it is the fastest way to prove a design.',
    items: ['Angular', 'TypeScript', '.NET / C#', 'Python']
  },
  {
    title: 'Product Innovation',
    blurb: 'Turning transformation mandates into shipped products with measurable commercial outcomes.',
    items: ['AI Products', 'Digital Transformation', 'Discovery', 'Roadmapping']
  },
  {
    title: 'Technical Leadership',
    blurb: 'Building and steering engineering organisations through multi-country, multi-year delivery.',
    items: ['Team Building', 'Delivery Excellence', 'Stakeholder Management', 'Agile / Scrum']
  }
];

/* ── Career journey ────────────────────────────────────────────── */
export type JourneyStage = { stage: string; period: string; detail: string };

/* Years figures are anchored to two different starts, deliberately:
   1996 = first technology role (infrastructure), Nov 2005 = first software role.
   Total career reads 30 years; the software career reads 20+. */
export const journey: JourneyStage[] = [
  { stage: 'Infrastructure Foundation', period: '1996 — 2005', detail: 'Hardware, desktop support, and on-premises server deployment' },
  { stage: 'Engineering Foundation', period: '2006 — 2013', detail: 'Core banking migrations and 100+ software implementations' },
  { stage: 'Solution Architect',     period: '2013 — 2017', detail: 'HRMS, payroll, and multi-country retail ERP' },
  { stage: 'Enterprise Architect',   period: '2018 — 2020', detail: 'Unified ERP across 23 business verticals' },
  { stage: 'AI Strategist',          period: '2020 — 2026', detail: 'Self-generative chatbot and CX platforms' },
  { stage: 'VP Technical',           period: '2026 — Now',  detail: 'Customer-service automation on Anthropic Claude' },
];

/* ── Thought leadership ────────────────────────────────────────────
   PLACEHOLDER CONTENT — replace `articles` with real published pieces
   (or delete the ThoughtLeadership section from page.tsx). Nothing
   here is a real article; `placeholder: true` renders a visible badge
   so it cannot ship unnoticed. */
export type Article = {
  title: string;
  topic: string;
  excerpt: string;
  href?: string;
  placeholder?: boolean;
};

export const articles: Article[] = [
  { topic: 'AI Strategy',              title: 'Placeholder — your article title here', excerpt: 'Replace with a real published piece, or remove this section entirely.', placeholder: true },
  { topic: 'Enterprise Transformation',title: 'Placeholder — your article title here', excerpt: 'Replace with a real published piece, or remove this section entirely.', placeholder: true },
  { topic: 'Agentic AI',               title: 'Placeholder — your article title here', excerpt: 'Replace with a real published piece, or remove this section entirely.', placeholder: true },
  { topic: 'Product Engineering',      title: 'Placeholder — your article title here', excerpt: 'Replace with a real published piece, or remove this section entirely.', placeholder: true },
  { topic: 'Leadership',               title: 'Placeholder — your article title here', excerpt: 'Replace with a real published piece, or remove this section entirely.', placeholder: true },
  { topic: 'Architecture Practices',   title: 'Placeholder — your article title here', excerpt: 'Replace with a real published piece, or remove this section entirely.', placeholder: true },
];

/* ── Testimonials ──────────────────────────────────────────────────
   PLACEHOLDER CONTENT — never ship an invented quote attributed to a
   real person. Replace with quotes you have explicit permission to
   publish, or delete the Testimonials section from page.tsx. */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'Replace this with a real quote you have permission to publish. Until then this section is intentionally unattributed — no invented endorsements.',
    name: 'Awaiting real attribution',
    role: 'Add name, title, and company',
    placeholder: true
  }
];

export const education = [
  { title: 'Bachelor of Commerce (B.Com.)', subtitle: 'Kalinga University' },
  { title: 'Diploma in Computer Application', subtitle: 'Core Computing' },
  { title: 'Diploma in Computer Hardware', subtitle: 'Hardware & Maintenance' },
  { title: 'Diploma in Desktop Publication', subtitle: 'Design & Publishing' }
];

export const languages = ['English', 'Hindi', 'Telugu', 'Marathi'];
