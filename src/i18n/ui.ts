import type { Lang } from '../data/site';

/**
 * UI chrome strings (section headings, button labels, small connective text).
 * The Chinese side intentionally holds `TODO(zh)` markers where the wording
 * should be written by hand — do NOT machine-translate these.
 *
 * Longer résumé/product copy lives in the data files (experience.ts, projects.ts,
 * skills.ts) using the same { en, zh } shape.
 */
export const ui = {
  en: {
    // Meta
    'site.description':
      'Scott Xu — Senior Project Manager & AI Product Builder in Singapore. 15+ years in banking transformation, now leading AI-powered client onboarding. Builder of Turtle Soup and MyHub.',

    // Language switch
    'lang.switch': '中文',
    'lang.switchAria': 'Switch to Chinese',

    // Hero
    'hero.openToWork': 'Open to opportunities',
    'hero.location': 'Singapore',
    'hero.ctaContact': 'Get in touch',
    'hero.ctaResume': 'Download résumé',
    'hero.photoAlt': 'Portrait of Scott Xu',

    // Sections
    'products.title': 'Products I build',
    'products.subtitle': 'Shipped, in production, and used by real people.',
    'products.viewCase': 'Read the case study',
    'products.liveLink': 'Visit',
    'experience.title': 'Experience',
    'skills.title': 'Skills',
    'skills.banking': 'Banking Domain',
    'skills.technical': 'Technical',
    'skills.product': 'Product / PM',
    'beyond.title': 'Beyond work',

    // Footer
    'footer.emailLabel': 'Email',
    'footer.linkedinLabel': 'LinkedIn',
    'footer.resumeLabel': 'Résumé (PDF)',
    'footer.builtWith': 'Built with Astro. No tracking, no cookies.',

    // Project subpage
    'project.back': '← Back to home',
    'project.problem': 'Problem',
    'project.approach': 'Approach',
    'project.role': 'My role',
    'project.result': 'Result',
    'project.stack': 'Tech stack',
    'project.visit': 'Visit',
  },
  zh: {
    // Meta
    'site.description': '中文 meta description',

    // Language switch
    'lang.switch': 'English',
    'lang.switchAria': '切换到英文',

    // Hero
    'hero.openToWork': '开放新机会',
    'hero.location': '新加坡',
    'hero.ctaContact': '联系我',
    'hero.ctaResume': '下载简历',
    'hero.photoAlt': 'Scott Xu 肖像',

    // Sections
    'products.title': '我做的产品',
    'products.subtitle': '已上线、在运行、有人真的在用。',
    'products.viewCase': '查看案例',
    'products.liveLink': '访问',
    'experience.title': '工作经历',
    'skills.title': '技能',
    'skills.banking': '银行业务领域',
    'skills.technical': '技术能力',
    'skills.product': '产品 / 项目管理',
    'beyond.title': '工作之外',

    // Footer
    'footer.emailLabel': '邮箱',
    'footer.linkedinLabel': 'LinkedIn',
    'footer.resumeLabel': '简历 (PDF)',
    'footer.builtWith': '使用 Astro 构建。无追踪，无 cookie。',

    // Project subpage
    'project.back': '← 返回首页',
    'project.problem': '问题',
    'project.approach': '解决方案',
    'project.role': '我的角色',
    'project.result': '成果',
    'project.stack': '技术栈',
    'project.visit': '访问',
  },
} as const;

type UiKey = keyof (typeof ui)['en'];

/** Returns a translator bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key];
  };
}
