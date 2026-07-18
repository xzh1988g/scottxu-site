import type { Bilingual } from './types';

/**
 * Three columns — Banking Domain × Technical × Product/PM.
 * Deliberately ATS- and agent-friendly for keyword matching, so the skill
 * tokens themselves stay in English (industry-standard terms) on both sides.
 */
export interface SkillColumn {
  key: 'banking' | 'technical' | 'product';
  items: string[];
}

export const skills: SkillColumn[] = [
  {
    key: 'banking',
    items: [
      'Client Onboarding (KYC / ALM / CDD)',
      'Wealth Management',
      'Risk & Compliance',
      'Static Data',
      'Migration Strategy',
    ],
  },
  {
    key: 'technical',
    items: ['Python (automation, FastAPI)', 'SQL', 'Excel / VBA', 'Tableau', 'JIRA'],
  },
  {
    key: 'product',
    items: [
      'Agentic workflow design',
      'LLM-based agents',
      'Microsoft Copilot',
      'Flowable BPM',
      'PMP',
      'Agile / Scrum',
      'PMO governance',
      'Stakeholder & change management',
    ],
  },
];

/** One memorable human detail. */
export const beyondWork: Bilingual = {
  en: 'Certified Dive Instructor (100+ students trained) · Bouldering (SNCS Level 1) · Travelled 20+ countries.',
  zh: '持证潜水教练（培训 100+ 名学员）· 攀岩（SNCS 一级）· 走过 20+ 个国家。',
};
