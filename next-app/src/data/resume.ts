export type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
};

export type Project = {
  title: string;
  blurb: string;
  context?: string;
  stack: string[];
  outcomes: string[];
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
  title: 'Technical Project Manager · AI Solutions Architect · Full-Stack Engineer',
  blurb:
    'I build production AI platforms and the systems that ship them — chatbots, voice-driven survey tools, customer-service apps, and large-scale ERPs. 20+ years across BFSI, Retail, Logistics, HRMS, and ERP.',
  location: 'Bangalore, India',
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
    items: ['TPM · 196+ team', 'Multi-country delivery', 'Stakeholder management', 'Agile / Scrum']
  }
];

export const brands: Brand[] = [
  { name: 'Anthropic Claude', file: 'anthropic.svg' },
  { name: 'Microsoft Azure', file: 'microsoftazure.svg' },
  { name: 'OpenAI', file: 'openai.svg' },
  { name: 'Oracle', file: 'oracle.svg' },
  { name: 'Microsoft', file: 'microsoft.svg' },
  { name: 'AWS', file: 'amazonwebservices.svg' },
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
      'Leading customer-service automation powered by Anthropic Claude AI — app, admin portal, and legacy integrations.',
    highlights: [
      'End-to-end Customer Service App and Admin Portal built on Anthropic Claude AI',
      'Integrated with legacy systems through robust pipelines and strict security controls',
      'Driving CSAT and operational efficiency gains via real-time, contextual AI support'
    ],
    stack: ['Anthropic Claude', '.NET', 'Angular', 'Azure']
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
      'HRMS and Payroll deployed across Marriott, Westin, Four Points',
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
      '100+ ERP implementations across Maharashtra over 5 years',
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
    title: 'Self-Generative Chatbot Platform',
    blurb:
      'Auto-generates contextual chatbots from documents, audio, video, or text — embeddable via unique URL.',
    context: 'Sonata Software',
    stack: ['Anthropic', 'Azure OpenAI', 'ChatGPT', 'Oracle AI', 'Python', '.NET'],
    outcomes: [
      'Build time reduced from weeks to minutes',
      'Multi-AI provider redundancy across 4 vendors',
      'Plug-and-play embeddable URL deployment'
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export const education = [
  { title: 'Bachelor of Commerce (B.Com.)', subtitle: 'Kalinga University' },
  { title: 'Diploma in Computer Application', subtitle: 'Core Computing' },
  { title: 'Diploma in Computer Hardware', subtitle: 'Hardware & Maintenance' },
  { title: 'Diploma in Desktop Publication', subtitle: 'Design & Publishing' }
];

export const languages = ['English', 'Hindi', 'Telugu', 'Marathi'];
