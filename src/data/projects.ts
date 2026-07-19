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
      zh: 'AI 驱动的双语横向思维解谜游戏，已上架 iOS App Store。',
    },
    liveUrl: 'https://apps.apple.com/app/id6767982859',
    liveLabel: 'App Store',
    status: { en: 'Live on iOS App Store', zh: '已上架 iOS App Store' },
    problem: {
      en: 'Lateral-thinking "situation puzzles" (海龟汤) are a beloved social game, but they need a sharp, patient host who can answer free-form yes/no questions and know when a player has cracked it — something a static puzzle list can never do.',
      zh: '海龟汤是很受欢迎的推理社交游戏，但它需要一个反应敏锐又有耐心的主持人：能理解玩家天马行空的提问、给出前后一致的是非判断，并在玩家接近真相时准确收网。一份静态的谜题列表永远做不到这件事。',
    },
    approach: {
      en: 'Built a mobile game where an LLM plays the host: it interprets open-ended player questions, answers consistently against a hidden solution, and adjudicates the reveal — in both English and Chinese from a single design.',
      zh: '构建了一款移动游戏，其中 LLM 扮演主持人角色：它解释开放性玩家问题，针对隐藏解决方案一致回答，并裁决揭示过程——在英文和中文中均适用。',
    },
    role: {
      en: 'Sole builder — product design, prompt/agent design, app development, bilingual content, and App Store release.',
      zh: '独立开发 — 产品设计、Prompt 与 Agent 设计、应用开发、双语内容与上架发布。',
    },
    result: {
      en: 'Shipped and live on the iOS App Store.',
      zh: '已上架并运行',
    },
    stack: ['LLM agent', 'iOS', 'Bilingual (EN/中文)'],
  },
  {
    slug: 'myhub',
    name: { en: 'MyHub', zh: 'MyHub' },
    oneLiner: {
      en: 'A personal data platform: plugin-based parsers feeding interactive dashboards.',
      zh: '个人数据平台：插件式解析器驱动交互式仪表盘。',
    },
    liveUrl: '', // No public live link — personal-use production system.
    liveLabel: '',
    status: { en: 'In production (personal use)', zh: '生产环境运行（个人使用）' },
    problem: {
      en: 'Personal data is scattered across dozens of exports and formats with no single place to explore it. A one-off script per source does not scale.',
      zh: '个人数据散落在几十种导出文件和格式里，没有一个统一的地方可以查看和探索。为每个数据源单独写一次性脚本的做法无法规模化。',
    },
    approach: {
      en: 'A plugin architecture where each data source is a small parser that normalizes into a shared model, then interactive ECharts dashboards render the combined view — served by a FastAPI backend.',
      zh: '采用插件式架构：每个数据源对应一个轻量解析器，将数据规范化到统一模型；再由 FastAPI 后端驱动 ECharts 交互式仪表盘，呈现整合后的全貌。',
    },
    role: {
      en: 'Sole builder — architecture, parser framework, backend, and dashboard UI.',
      zh: '独立开发 — 架构设计、解析器框架、后端与仪表盘界面。',
    },
    result: {
      en: 'Running in production for personal use. ',
      zh: '已在生产环境中稳定运行，供个人日常使用。',
    },
    stack: ['Python', 'FastAPI', 'ECharts', 'Plugin architecture'],
  },
  {
    slug: 'magic-remover',
    name: { en: 'MagicRemover', zh: 'MagicRemover 去背器' },
    oneLiner: {
      en: 'A desktop background remover that trades one-click AI for precise, offline control.',
      zh: '桌面去背工具：放弃一键 AI，换来精确、离线、可反悔的控制权。',
    },
    liveUrl: 'https://github.com/xzh1988g/Background_Removal',
    liveLabel: 'GitHub',
    status: { en: 'Open source on GitHub', zh: '已在 GitHub 开源' },
    problem: {
      en: 'One-click AI background removers are a black box: when they clip an edge wrong there is no way to correct just that part, and they require uploading the image to someone else\'s server. For images with flat backgrounds — logos, product shots, screenshots — what is actually needed is precise, repeatable control that runs locally.',
      zh: '一键式 AI 去背工具是个黑盒：边缘抠错了也没法只修那一处，而且必须把图片上传到别人的服务器。但对于纯色背景的图片——logo、商品图、截图——真正需要的其实是精确、可复现、且完全在本地运行的控制。',
    },
    approach: {
      en: 'A desktop tool built on classic computer vision instead of a model: click a color, flood-fill selects the contiguous region within an adjustable tolerance, and the result is written to the alpha channel. Each pick is a non-destructive layer in a history panel — adjust its tolerance or delete it individually at any time. The original and the checkerboard transparency preview share one synced zoom/pan view, and export offers resizing with aspect-ratio lock.',
      zh: '不用模型，而是用传统计算机视觉搭的桌面工具：点选一个颜色，漫水填充按可调容差选出相连区域，结果写入 alpha 通道。每次取色都是历史面板里的一层非破坏性操作——随时可以单独调整它的容差或删掉。原图与棋盘格透明预览共享同一套缩放/平移视图，导出时还可按锁定长宽比缩放。',
    },
    role: {
      en: 'Sole builder — product design, image-processing logic, desktop UI, and bilingual interface.',
      zh: '独立开发 — 产品设计、图像处理逻辑、桌面界面与双语界面。',
    },
    result: {
      en: 'A working tool I use myself, open-sourced on GitHub.',
      zh: '自己在日常使用的工具，已在 GitHub 开源。',
    },
    stack: ['Python', 'OpenCV', 'Tkinter', 'Bilingual (EN/中文)'],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
