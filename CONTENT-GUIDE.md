# 内容修改指南（改哪儿看这里）

这份文档告诉你：网站上每一块文字 / 图片 / 链接，分别在哪个文件里改。
所有内容都是 **英文（en）+ 中文（zh）** 成对存放，改完运行 `npm run build` 即可。

> 小技巧：想一次找出所有还没写的中文，在项目根目录运行：
> ```bash
> grep -rn "TODO(zh)" src
> ```

---

## 一、最常改的东西

| 你想改的 | 文件 | 说明 |
| --- | --- | --- |
| **邮箱**（一处改，全站生效） | `src/data/site.ts` → `email` | 以后换成 `hello@scottxu.dev` 就改这里 |
| 姓名 / 职位 / 地点 / LinkedIn / App Store 链接 | `src/data/site.ts` | 全站的"单一事实来源" |
| 照片 | 放 `public/scott.jpg`（覆盖同名文件即可） | 路径在 `site.ts` 的 `photo` |
| 简历 PDF | 放 `public/resume.pdf` | 路径在 `site.ts` 的 `resumePdf` |
| **首页大标语**（主 + 副标语，中英各一句） | `src/components/Hero.astro` 顶部的 `tagline` / `taglineSub` | 直接改文字 |

---

## 二、正文内容（首页各区块）

| 页面区块 | 文件 |
| --- | --- |
| **产品**（海龟汤 + MyHub，卡片和子页面共用） | **`src/data/projects.ts`** |
| **工作经历**（时间线、公司、职位、每条 bullet） | `src/data/experience.ts` |
| **技能**（三栏）+ 底部"工作之外"一句 | `src/data/skills.ts` |

---

## 三、界面文字（按钮、区块标题这类）

统一在 **`src/i18n/ui.ts`** 的 `zh: {}` 里。把 `TODO(zh): ` 前缀删掉、润色即可。
例如：

| 页面上看到的 | 键（key） |
| --- | --- |
| 联系我 / 下载简历（首页按钮） | `hero.ctaContact` / `hero.ctaResume` |
| "我做的产品" / "工作经历" / "技能"（区块标题） | `products.title` / `experience.title` / `skills.title` |
| 查看案例 / 访问（产品卡按钮） | `products.viewCase` / `products.liveLink` |
| 子页面标签：问题 / 方法 / 我的角色 / 成果 / 技术栈 | `project.problem` / `project.approach` / `project.role` / `project.result` / `project.stack` |

> ⚠️ `lang.switch`（语言切换按钮上的字）中文页显示 `English` 是**故意的**，别改。

---

## 四、产品子页面详解（以 MyHub 为例）

`/projects/myhub` 这个页面的**所有文字**都来自 `src/data/projects.ts` 里的 `myhub` 对象：

```ts
{
  slug: 'myhub',                 // 决定网址 /projects/myhub（一般不用改）
  name:     { en, zh },          // 页面大标题 + 卡片标题
  oneLiner: { en, zh },          // 标题下面那句话（卡片 + 子页面顶部）
  liveUrl:  '',                  // 在线链接。空字符串 = 不显示"访问"按钮
  liveLabel:'',                  // 访问按钮上的名字，如 'App Store'
  status:   { en, zh },          // 绿色状态标签，如"生产环境运行（个人使用）"
  problem:  { en, zh },          // 子页面：问题
  approach: { en, zh },          // 子页面：方法
  role:     { en, zh },          // 子页面：我的角色
  result:   { en, zh },          // 子页面：成果（未公开的数字先留 TODO）
  stack:    ['Python', ...],     // 技术栈小标签（中英通用，无需翻译）
}
```

- **子页面上"问题 / 方法 / 我的角色 / 成果 / 技术栈"这几个小标题**不在这里，
  它们是界面文字，在 `src/i18n/ui.ts` 的 `project.*`。
- 想加**第三个产品**？在 `projects.ts` 的数组里再加一个对象，
  子页面 `/projects/<新slug>` 会自动生成，无需改别的文件。

---

## 五、给爬虫 / AI 看的文件（改了正文记得同步这三个）

这几个是**独立的静态文件**，不会自动跟着上面的数据更新：

| 文件 | 内容 |
| --- | --- |
| `public/llms.txt` | 给 LLM 爬虫看的纯文字自我介绍 |
| `public/resume.json` | JSON Resume 格式简历（ATS / AI 直接解析） |
| `public/robots.txt` | 爬虫规则 + sitemap 地址 |

> 尤其是**换邮箱**时：`site.ts` 改完，别忘了把 `llms.txt` 和 `resume.json` 里的邮箱也改了。

（首页的 Person 结构化数据、子页面的 CreativeWork 结构化数据，是**自动**从
`src/data/site.ts` / `projects.ts` 生成的，逻辑在 `src/data/jsonld.ts`，一般不用手动改。）

---

## 六、外观 / 样式

| 想改的 | 文件 |
| --- | --- |
| 颜色、字体、间距（全站变量） | `src/styles/global.css` 顶部的 `:root { ... }` |
| 某个区块的专属样式 | 对应的 `src/components/*.astro` 底部 `<style>` 块 |

---

## 改完怎么看效果

```bash
npm run dev       # 本地预览，改动实时刷新 → http://localhost:4321
npm run build     # 生成可部署的 dist/
```

中文页在 `/zh/`（例如 http://localhost:4321/zh/）。
