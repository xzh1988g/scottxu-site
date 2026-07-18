import type { Bilingual } from './types';

export interface Project {
  /** Descriptive slug → /projects/<slug> */
  slug: string;
  name: Bilingual;
  /** Short one-liner for the home card. */
  oneLiner: Bilingual;
  /** Live/primary link. */
  liveUrl: string;
  liveLabel: string;
  status: Bilingual;
  /** Case-study body for the subpage. Leave unknown metrics as TODO. */
  problem: Bilingual;
  approach: Bilingual;
  role: Bilingual;
  /** Result: keep TODO where I have not supplied a metric. */
  result: Bilingual;
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: 'turtle-soup',
    name: { en: 'Turtle Soup (海龟汤)', zh: '海龟汤 (Turtle Soup)' },
    oneLiner: {
      en: 'An AI-powered bilingual lateral-thinking puzzle game, live on the iOS App Store.',
      zh: 'TODO(zh): AI 驱动的双语横向思维解谜游戏，已上架 iOS App Store。',
    },
    liveUrl: 'https://apps.apple.com/app/id6767982859',
    liveLabel: 'App Store',
    status: { en: 'Live on iOS App Store', zh: 'TODO(zh): 已上架 iOS App Store' },
    problem: {
      en: 'Lateral-thinking "situation puzzles" (海龟汤) are a beloved social game, but they need a sharp, patient host who can answer free-form yes/no questions and know when a player has cracked it — something a static puzzle list can never do.',
      zh: 'TODO(zh): 横向思维解谜（海龟汤）问题描述……',
    },
    approach: {
      en: 'Built a mobile game where an LLM plays the host: it interprets open-ended player questions, answers consistently against a hidden solution, and adjudicates the reveal — in both English and Chinese from a single design.',
      zh: 'TODO(zh): 方法描述……',
    },
    role: {
      en: 'Sole builder — product design, prompt/agent design, app development, bilingual content, and App Store release.',
      zh: 'TODO(zh): 独立开发者 — 产品设计、提示/智能体设计、应用开发、双语内容与上架。',
    },
    result: {
      en: 'Shipped and live on the iOS App Store. TODO: downloads / ratings / retention metrics.',
      zh: 'TODO(zh): 已上架并运行……TODO: 下载量 / 评分 / 留存指标。',
    },
    stack: ['LLM agent', 'iOS', 'Bilingual (EN/中文)'],
  },
  {
    slug: 'myhub',
    name: { en: 'MyHub', zh: 'MyHub' },
    oneLiner: {
      en: 'A personal data platform: plugin-based parsers feeding interactive dashboards.',
      zh: 'TODO(zh): 个人数据平台：插件式解析器驱动交互式仪表盘。',
    },
    liveUrl: '', // No public live link — personal-use production system.
    liveLabel: '',
    status: { en: 'In production (personal use)', zh: 'TODO(zh): 生产环境运行（个人使用）' },
    problem: {
      en: 'Personal data is scattered across dozens of exports and formats with no single place to explore it. A one-off script per source does not scale.',
      zh: 'TODO(zh): 个人数据分散在各种导出与格式中……问题描述。',
    },
    approach: {
      en: 'A plugin architecture where each data source is a small parser that normalizes into a shared model, then interactive ECharts dashboards render the combined view — served by a FastAPI backend.',
      zh: 'TODO(zh): 插件架构方法描述……',
    },
    role: {
      en: 'Sole builder — architecture, parser framework, backend, and dashboard UI.',
      zh: 'TODO(zh): 独立开发者 — 架构、解析器框架、后端与仪表盘界面。',
    },
    result: {
      en: 'Running in production for personal use. TODO: number of sources / data volume if I want to share it.',
      zh: 'TODO(zh): 生产环境个人使用……TODO: 数据源数量 / 数据量。',
    },
    stack: ['Python', 'FastAPI', 'ECharts', 'Plugin architecture'],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
