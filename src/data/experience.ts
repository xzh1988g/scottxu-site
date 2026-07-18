import type { Bilingual } from './types';

export interface ExperienceItem {
  /** Brand name — shown as-is on both sides (Latin brand names read fine in
   *  Chinese). Make it Bilingual too if you'd rather show 瑞银 / 印孚瑟斯. */
  company: Bilingual;
  role: Bilingual;
  location: Bilingual;
  period: Bilingual;
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
    company: { en: 'UBS', zh: '瑞银集团' },
    role: {
      en: 'Product Manager & Journey Lead — AI-Powered Client Onboarding',
      zh: '客户开户 AI 平台产品负责人',
    },
    location: { en: 'Singapore', zh: '新加坡' },
    period: { en: 'Apr 2026 – present', zh: '2026年4月 – 至今' },
    note: 'Confidentiality: describe capability only. No internal screenshots, architecture diagrams, project codenames, or vendor details.',
    bullets: [
      {
        en: 'Own end-to-end design and delivery of a Flowable-based workflow orchestration platform that integrates AI agents (source-of-wealth analysis, name screening) into a unified onboarding journey; scope spans all onboarding journeys bank-wide; in active build toward launch.',
        zh: '端到端负责基于 Flowable 的工作流编排平台的设计与交付，将资金来源分析、名称筛查等 AI Agent 整合进统一的开户流程；覆盖全行所有开户旅程，目前处于开发阶段，正推进上线。',
      },
      {
        en: 'Built internal AI agents with Microsoft Copilot (BRD drafting, compliance checks) adopted by 99+ internal users.',
        zh: '使用 Microsoft Copilot 搭建内部 AI Agent（项目需求撰写、合规检查），已被 99+ 内部用户使用。',
      },
    ],
  },
  {
    company: { en: 'UBS', zh: '瑞银集团' },
    role: {
      en: 'Senior Project Manager & Migration Stream Lead',
      zh: '高级项目经理 / 数据迁移工作流负责人',
    },
    location: { en: 'Singapore / Zürich', zh: '新加坡 / 苏黎世' },
    period: { en: '2023 – Apr 2026', zh: '2023 – 2026年4月' },
    bullets: [
      {
        en: 'Strategic Migration Lead on the UBS/CS integration (short assignment in Zürich): turned around a distressed Client Static Data stream, delivering 4 consecutive successful migration waves.',
        zh: '担任瑞银与瑞信整合项目的战略迁移负责人（苏黎世短期外派）：扭转一个陷入困境的客户静态数据迁移工作流，连续交付 4 个批次的成功迁移。',
      },
      {
        en: 'Ran SQL analyses to resolve data fallouts and re-engineered a reconciliation process, cutting time by 30%.',
        zh: '通过 SQL 分析独立定位并解决数据异常，减少对 IT 团队的依赖；重构冗余的对账流程，处理时间缩短 30%。',
      },
      {
        en: 'As APAC Migration Stream Lead & COO PM, migrated 25,000+ Wealth Management clients within a 3-month window; wrote Python automation for data cleansing and validation; led Compliance & Risk system optimization for the COO office.',
        zh: '作为亚太区迁移工作流负责人及 COO 办公室项目经理，在 3 个月的关键窗口期内完成 25,000+ 财富管理客户的迁移；开发 Python 自动化工具处理迁移前的数据清洗与校验；主导 COO 办公室的合规与风险系统优化。',
      },
    ],
  },
  {
    company: { en: 'Infosys Consulting', zh: '印孚瑟斯咨询' },
    role: {
      en: 'Senior Management Consultant / PMO Lead',
      zh: '高级管理咨询顾问',
    },
    location: { en: 'Singapore', zh: '新加坡' },
    period: { en: '2017 – 2023', zh: '2017 – 2023' },
    bullets: [
      {
        en: 'Ran the PMO for a $6M+ investment platform transformation (150+ resources, 100+ deliverables) and led 17 offshore resources.',
        zh: '主导 600 万美元以上投资平台转型项目的 PMO，涉及 150+ 人力与 100+ 交付物，并管理 17 名离岸团队成员。',
      },
      {
        en: 'Lifted data-comparison efficiency by 75% via self-built tools.',
        zh: '自研自动化工具，将数据比对效率提升 75%。',
      },
      {
        en: 'Designed 6 investment trading workflows (Equity, Bonds, FX, ETD, Funds).',
        zh: '设计 6 套投资交易工作流，覆盖股票、债券、外汇、场内衍生品与基金。',
      },
    ],
  },
  {
    company: { en: 'Infosys', zh: 'Infosys' },
    role: {
      en: 'Testing Lead & Banking System Specialist',
      zh: '测试负责人 / 银行系统专家',
    },
    location: { en: 'Singapore & China', zh: '新加坡 & 中国' },
    period: { en: '2010 – 2017', zh: '2010 – 2017' },
    bullets: [
      {
        en: 'Delivered 10+ banking system upgrades, including a short on-site "Floor Runner" stint in Zürich.',
        zh: '交付 10+ 银行系统升级项目，其中包括在苏黎世的短期现场支持（Floor Runner），直接协助客户顾问团队完成关键上线。',
      },
      {
        en: 'Localized onboarding workflows (KYC / ALM / account opening).',
        zh: '本地化客户开户流程（KYC、反洗钱、账户开立）；负责投资适当性、风险与合规模块的端到端测试。',
      },
      {
        en: 'Raised test automation effectiveness by 90% — earned a CEO Award.',
        zh: '搭建测试自动化方案，测试有效性提升 90%，并因此获得公司 CEO Award。',
      },
    ],
  },
];
