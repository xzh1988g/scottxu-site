import type { Bilingual } from './types';

export interface ExperienceItem {
  company: string;
  /** Kept in English on both sides (proper nouns / titles). */
  role: Bilingual;
  location: string;
  period: string;
  /** Results-first bullets: verb + outcome. */
  bullets: Bilingual[];
  /** Confidentiality reminder shown to editors only (never rendered). */
  note?: string;
}

/**
 * SOURCE OF TRUTH — facts verbatim from the brief. Do NOT invent numbers.
 * CONFIDENTIALITY: capability-level description only. No internal screenshots,
 * architecture diagrams, project codenames, or vendor details.
 */
export const experience: ExperienceItem[] = [
  {
    company: 'UBS',
    role: {
      en: 'Product Manager & Journey Lead — AI-Powered Client Onboarding',
      zh: 'TODO(zh): 产品经理与旅程负责人 — AI 驱动的客户开户',
    },
    location: 'Singapore',
    period: 'Apr 2026 – present',
    note: 'Confidentiality: describe capability only. No internal screenshots, architecture diagrams, project codenames, or vendor details.',
    bullets: [
      {
        en: 'Own end-to-end design and delivery of a Flowable-based workflow orchestration platform that integrates AI agents (source-of-wealth analysis, name screening) into a unified onboarding journey; scope spans all onboarding journeys bank-wide; in active build toward launch.',
        zh: 'TODO(zh): 端到端负责基于 Flowable 的工作流编排平台的设计与交付……',
      },
      {
        en: 'Built internal AI agents with Microsoft Copilot (BRD drafting, compliance checks) adopted by 99+ internal users.',
        zh: 'TODO(zh): 使用 Microsoft Copilot 构建内部 AI 智能体……被 99+ 内部用户采用。',
      },
    ],
  },
  {
    company: 'UBS',
    role: {
      en: 'Senior Project Manager & Migration Stream Lead',
      zh: 'TODO(zh): 高级项目经理与迁移流负责人',
    },
    location: 'Singapore / Zürich',
    period: '2023 – Apr 2026',
    bullets: [
      {
        en: 'Strategic Migration Lead on the UBS/CS integration (short assignment in Zürich): turned around a distressed Client Static Data stream, delivering 4 consecutive successful migration waves.',
        zh: 'TODO(zh): UBS/CS 整合的战略迁移负责人（苏黎世短期外派）……4 个连续成功的迁移批次。',
      },
      {
        en: 'Ran SQL analyses to resolve data fallouts and re-engineered a reconciliation process, cutting time by 30%.',
        zh: 'TODO(zh): 通过 SQL 分析解决数据异常，并重新设计对账流程，节省 30% 时间。',
      },
      {
        en: 'As APAC Migration Stream Lead & COO PM, migrated 25,000+ Wealth Management clients within a 3-month window; wrote Python automation for data cleansing and validation; led Compliance & Risk system optimization for the COO office.',
        zh: 'TODO(zh): 作为亚太迁移流负责人与 COO 项目经理，在 3 个月内迁移 25,000+ 财富管理客户……',
      },
    ],
  },
  {
    company: 'Infosys Consulting',
    role: {
      en: 'Senior Management Consultant / PMO Lead',
      zh: 'TODO(zh): 高级管理咨询顾问 / PMO 负责人',
    },
    location: 'Singapore',
    period: '2017 – 2023',
    bullets: [
      {
        en: 'Ran the PMO for a $6M+ investment platform transformation (150+ resources, 100+ deliverables) and led 17 offshore resources.',
        zh: 'TODO(zh): 负责 600 万美元以上投资平台转型的 PMO（150+ 人力，100+ 交付物），管理 17 名离岸资源。',
      },
      {
        en: 'Lifted data-comparison efficiency by 75% via self-built tools.',
        zh: 'TODO(zh): 通过自研工具将数据比对效率提升 75%。',
      },
      {
        en: 'Designed 6 investment trading workflows (Equity, Bonds, FX, ETD, Funds).',
        zh: 'TODO(zh): 设计 6 套投资交易工作流（股票、债券、外汇、场内衍生品、基金）。',
      },
    ],
  },
  {
    company: 'Infosys',
    role: {
      en: 'Testing Lead & Banking System Specialist',
      zh: 'TODO(zh): 测试负责人与银行系统专家',
    },
    location: 'Singapore & China',
    period: '2010 – 2017',
    bullets: [
      {
        en: 'Delivered 10+ banking system upgrades, including a short on-site "Floor Runner" stint in Zürich.',
        zh: 'TODO(zh): 交付 10+ 银行系统升级，包括在苏黎世的短期现场 “Floor Runner” 支持。',
      },
      {
        en: 'Localized onboarding workflows (KYC / ALM / account opening).',
        zh: 'TODO(zh): 本地化开户工作流（KYC / ALM / 开户）。',
      },
      {
        en: 'Raised test automation effectiveness by 90% — earned a CEO Award.',
        zh: 'TODO(zh): 将测试自动化有效性提升 90% — 获得 CEO 奖。',
      },
    ],
  },
];
