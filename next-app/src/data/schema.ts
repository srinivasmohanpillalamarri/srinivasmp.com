import { profile, metrics } from './resume';

export const SITE = 'https://srinivasmp.com';
const PERSON_ID = `${SITE}/#person`;

/**
 * Structured data, cross-referenced by @id rather than repeating the Person
 * object — duplicate copies create entity ambiguity for search and AI crawlers.
 *
 * `alternateName` covers the surname-first and initial forms common in Indian
 * HR systems, so they resolve to one entity instead of fragmenting it.
 */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: profile.name,
  givenName: 'Srinivas Mohan',
  familyName: 'Pillalamarri',
  alternateName: [
    'Pillalamarri Srinivas Mohan',
    'Srinivas M Pillalamarri',
    'S M Pillalamarri',
  ],
  jobTitle: 'Vice President — Technical',
  description: profile.metaDescription,
  url: SITE,
  mainEntityOfPage: SITE,
  image: `${SITE}/avatar.png`,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'SK Finance Ltd.',
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Software Architect',
    skills:
      'Enterprise architecture, Angular, .NET, C#, Azure, Azure OpenAI, Anthropic Claude, SQL Server, Oracle PL/SQL, generative AI, technical leadership',
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Kalinga University' },
  knowsLanguage: ['en', 'hi', 'te', 'mr'],
  knowsAbout: [
    'Software Architecture', 'Enterprise Architecture', 'Generative AI',
    'Large Language Models', 'Azure OpenAI', 'Anthropic Claude',
    'Retrieval Augmented Generation', 'Angular', 'TypeScript', '.NET', 'C#',
    'SQL Server', 'Oracle PL/SQL', 'Microsoft Azure', 'ERP Systems',
    'Digital Lending', 'Test Automation', 'DevSecOps',
  ],
  sameAs: [profile.links.linkedin, profile.links.github],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: profile.name,
  description: profile.metaDescription,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
};

export const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE}/#profilepage`,
  mainEntity: { '@id': PERSON_ID },
};

const years = metrics.find(m => m.label === 'Years Experience')?.value ?? '30';
const engineers = metrics.find(m => m.label === 'Engineering Leadership')?.value ?? '196+';

/**
 * Answers are written to stand alone. Retrieval splits pages into chunks, so
 * each answer has to make sense with no surrounding context — that is what
 * makes it quotable by an answer engine.
 */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Srinivas Mohan Pillalamarri?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Srinivas Mohan Pillalamarri is a software architect and technology leader based in Mumbai, India, with ${years} years in technology and over 20 years building enterprise software. He is VP – Technical at SK Finance Ltd., where he leads AI programmes for customer-service automation and autonomous quality engineering for regulated digital lending.`,
      },
    },
    {
      '@type': 'Question',
      name: "What is Srinivas Mohan Pillalamarri's experience with Azure OpenAI and generative AI?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Srinivas Mohan Pillalamarri has architected production generative-AI platforms across four providers — Anthropic Claude, Azure OpenAI, ChatGPT and Oracle AI. These include a self-generative chatbot platform that reduced chatbot build time from weeks to minutes, a multilingual voice-driven CX survey tool supporting English, Japanese and Chinese, and a customer-service automation platform built on Anthropic Claude for an NBFC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the largest engineering team Srinivas Mohan Pillalamarri has led?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Srinivas Mohan Pillalamarri coordinated more than ${engineers.replace('+', '')} engineers on the Microsoft Audit Platform migration from WPF to Angular, delivered with no major delivery failures across the programme lifecycle.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Srinivas Mohan Pillalamarri specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'His core stack is Angular and TypeScript on the front end, .NET and C# with Python on the back end, and SQL Server and Oracle PL/SQL for data. He works extensively with Microsoft Azure, Azure OpenAI and Anthropic Claude, and has recent depth in test automation using Playwright, Appium and FastAPI.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Srinivas Mohan Pillalamarri available for senior architecture roles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Srinivas Mohan Pillalamarri is open to senior individual contributor, lead and architect roles, particularly in enterprise AI, platform modernisation and engineering leadership. He is based in Mumbai, India and works across global time zones.',
      },
    },
  ],
};

export const allSchemas = [
  personSchema,
  websiteSchema,
  profilePageSchema,
  faqSchema,
];
