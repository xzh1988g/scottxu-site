import { site } from './site';
import type { Project } from './projects';
import { localizedUrl } from '../i18n/routing';

/**
 * Schema.org structured data. This is the site's key differentiator — a
 * first-class, machine-readable description of who Scott is, for AI recruiting
 * agents and LLM crawlers. All facts come from src/data/site.ts (verbatim).
 */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: site.givenName,
    jobTitle: site.jobTitle,
    email: `mailto:${site.email}`,
    url: site.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Singapore',
      addressCountry: 'SG',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'UBS',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'National University of Singapore',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Tongji University',
      },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'PMP (Project Management Professional)',
    },
    knowsLanguage: ['English', 'Mandarin Chinese'],
    sameAs: [site.linkedin, site.appStoreDev],
  };
}

/** CreativeWork schema for a project subpage. */
export function creativeWorkSchema(project: Project, lang: 'en' | 'zh') {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name.en,
    abstract: project.oneLiner.en,
    url: localizedUrl(`/projects/${project.slug}`, lang),
    creator: {
      '@type': 'Person',
      name: site.name,
      url: site.url,
    },
    inLanguage: lang === 'zh' ? 'zh-Hans' : 'en',
    keywords: project.stack.join(', '),
  };
  if (project.liveUrl) {
    schema.sameAs = [project.liveUrl];
  }
  return schema;
}
