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
    'site.description': 'TODO(zh): 中文 meta description',

    // Language switch
    'lang.switch': 'English',
    'lang.switchAria': '切换到英文',

    // Hero
    'hero.openToWork': 'TODO(zh): 开放机会',
    'hero.location': '新加坡',
    'hero.ctaContact': 'TODO(zh): 联系我',
    'hero.ctaResume': 'TODO(zh): 下载简历',
    'hero.photoAlt': 'TODO(zh): Scott Xu 肖像',

    // Sections
    'products.title': 'TODO(zh): 我做的产品',
    'products.subtitle': 'TODO(zh): 副标题',
    'products.viewCase': 'TODO(zh): 查看案例',
    'products.liveLink': 'TODO(zh): 访问',
    'experience.title': 'TODO(zh): 工作经历',
    'skills.title': 'TODO(zh): 技能',
    'skills.banking': 'TODO(zh): 银行领域',
    'skills.technical': 'TODO(zh): 技术',
    'skills.product': 'TODO(zh): 产品 / 项目管理',
    'beyond.title': 'TODO(zh): 工作之外',

    // Footer
    'footer.emailLabel': 'TODO(zh): 邮箱',
    'footer.linkedinLabel': 'LinkedIn',
    'footer.resumeLabel': 'TODO(zh): 简历 (PDF)',
    'footer.builtWith': 'TODO(zh): 使用 Astro 构建。无追踪，无 cookie。',

    // Project subpage
    'project.back': 'TODO(zh): ← 返回首页',
    'project.problem': 'TODO(zh): 问题',
    'project.approach': 'TODO(zh): 方法',
    'project.role': 'TODO(zh): 我的角色',
    'project.result': 'TODO(zh): 成果',
    'project.stack': 'TODO(zh): 技术栈',
    'project.visit': 'TODO(zh): 访问',
  },
} as const;

type UiKey = keyof (typeof ui)['en'];

/** Returns a translator bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key];
  };
}
