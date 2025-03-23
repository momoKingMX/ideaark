/**
 * 导航站 - 主脚本文件
 * 实现卡片生成、搜索、分类筛选和语言切换功能
 */

// 网站资源数据
const resources = [
    // 一、需求收集和关键词调研
    {
        title: "谷歌下拉词",
        titleEn: "Google Autocomplete Suggestions",
        url: "https://www.searchsuggest.tips/?keyword=",
        description: "查看谷歌搜索框的下拉词建议，帮助发现热门关键词",
        descriptionEn: "View Google search bar's dropdown suggestions to discover popular keywords",
        category: "keyword",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Toolify 榜单",
        titleEn: "Toolify Rankings",
        url: "https://www.toolify.ai/Best-AI-Tools-revenue",
        description: "AI工具榜单，展示各类AI工具的收入和流行度",
        descriptionEn: "AI tools ranking, showing revenue and popularity of various AI tools",
        category: "keyword",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "AI导航站需求列表",
        titleEn: "AI Navigation Site Requirements",
        url: "https://theresanaiforthat.com/requests",
        description: "收集用户对AI工具的需求列表",
        descriptionEn: "Collection of user requests for AI tools",
        category: "keyword",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "关键词难度",
        titleEn: "Keyword Difficulty",
        url: "https://ahrefs.com/keyword-difficulty",
        description: "Ahrefs提供的关键词难度评估工具",
        descriptionEn: "Keyword difficulty assessment tool provided by Ahrefs",
        category: "keyword",
        image: "assets/images/placeholder-image.svg"
    },

    // 二、上站必备 - 域名查询
    {
        title: "Lean Domain Search",
        titleEn: "Lean Domain Search",
        url: "https://leandomainsearch.com/",
        description: "帮助查找可用域名的工具",
        descriptionEn: "Tool to help find available domain names",
        category: "essential",
        subcategory: "domain-search",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Query Domains",
        titleEn: "Query Domains",
        url: "https://query.domains/",
        description: "域名查询和检查工具",
        descriptionEn: "Domain name query and check tool",
        category: "essential",
        subcategory: "domain-search",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Instant Domain Search",
        titleEn: "Instant Domain Search",
        url: "https://instantdomainsearch.com/?q=",
        description: "快速域名查询工具",
        descriptionEn: "Quick domain name search tool",
        category: "essential",
        subcategory: "domain-search",
        image: "assets/images/placeholder-image.svg"
    },

    // 二、上站必备 - 域名注册
    {
        title: "Spaceship",
        titleEn: "Spaceship",
        url: "https://spaceship.com",
        description: "域名注册服务提供商",
        descriptionEn: "Domain registration service provider",
        category: "essential",
        subcategory: "domain-register",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Porkbun",
        titleEn: "Porkbun",
        url: "https://porkbun.com",
        description: "提供域名注册和管理服务",
        descriptionEn: "Provides domain registration and management services",
        category: "essential",
        subcategory: "domain-register",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Namecheap",
        titleEn: "Namecheap",
        url: "https://namecheap.com",
        description: "经济实惠的域名注册服务商",
        descriptionEn: "Economical domain registration service provider",
        category: "essential",
        subcategory: "domain-register",
        image: "assets/images/placeholder-image.svg"
    },

    // 二、上站必备 - 代码&网站托管
    {
        title: "GitHub",
        titleEn: "GitHub",
        url: "https://github.com",
        description: "代码托管和版本控制平台",
        descriptionEn: "Code hosting and version control platform",
        category: "essential",
        subcategory: "hosting",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Cloudflare",
        titleEn: "Cloudflare",
        url: "https://cloudflare.com",
        description: "提供CDN、DNS和安全服务的网站",
        descriptionEn: "Website providing CDN, DNS and security services",
        category: "essential",
        subcategory: "hosting",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Vercel",
        titleEn: "Vercel",
        url: "https://vercel.com",
        description: "前端应用部署和托管平台",
        descriptionEn: "Frontend application deployment and hosting platform",
        category: "essential",
        subcategory: "hosting",
        image: "assets/images/placeholder-image.svg"
    },

    // 二、上站必备 - 数据后台
    {
        title: "Google Search Console",
        titleEn: "Google Search Console",
        url: "https://search.google.com/search-console",
        description: "谷歌搜索控制台，监控网站在谷歌搜索中的表现",
        descriptionEn: "Google Search Console, monitor website performance in Google search",
        category: "essential",
        subcategory: "data",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Google Analytics",
        titleEn: "Google Analytics",
        url: "https://analytics.google.com/analytics/web/#/",
        description: "谷歌分析，提供网站访问数据分析",
        descriptionEn: "Google Analytics, provides website traffic data analysis",
        category: "essential",
        subcategory: "data",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Bing Webmaster Tools",
        titleEn: "Bing Webmaster Tools",
        url: "https://www.bing.com/webmasters/submiturl",
        description: "必应站长工具，提交网址到必应搜索引擎",
        descriptionEn: "Bing Webmaster Tools, submit URL to Bing search engine",
        category: "essential",
        subcategory: "data",
        image: "assets/images/placeholder-image.svg"
    },

    // 三、竞品调研
    {
        title: "查看流量和网页关键词",
        titleEn: "Check Traffic and Web Keywords",
        url: "https://aitdk.com/",
        description: "查看网站流量和关键词排名的工具",
        descriptionEn: "Tool to check website traffic and keyword ranking",
        category: "research",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "查看外链",
        titleEn: "Check Backlinks",
        url: "https://ahrefs.com/free-seo-tools",
        description: "Ahrefs提供的免费SEO工具，可查看网站外链",
        descriptionEn: "Free SEO tools provided by Ahrefs to check website backlinks",
        category: "research",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "查看网站关键词",
        titleEn: "Check Website Keywords",
        url: "https://www.semrush.com/",
        description: "SEMrush提供的网站关键词分析工具",
        descriptionEn: "Website keyword analysis tool provided by SEMrush",
        category: "research",
        image: "assets/images/placeholder-image.svg"
    },

    // 四、上站模版 (完整列表)
    {
        title: "Rin模板",
        titleEn: "Rin Template",
        url: "https://github.com/openRin/Rin",
        description: "开源的Rin网站模板",
        descriptionEn: "Open source Rin website template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Next.js Boilerplate",
        titleEn: "Next.js Boilerplate",
        url: "https://github.com/ixartz/Next-js-Boilerplate",
        description: "Next.js项目的样板代码",
        descriptionEn: "Boilerplate code for Next.js projects",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "SaaS Boilerplate",
        titleEn: "SaaS Boilerplate",
        url: "https://github.com/ixartz/SaaS-Boilerplate",
        description: "SaaS项目的样板代码",
        descriptionEn: "Boilerplate code for SaaS projects",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Next.js Landing Page Starter",
        titleEn: "Next.js Landing Page Starter",
        url: "https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template",
        description: "Next.js的落地页启动模板",
        descriptionEn: "Landing page starter template for Next.js",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Astro Boilerplate",
        titleEn: "Astro Boilerplate",
        url: "https://github.com/ixartz/Astro-boilerplate",
        description: "Astro框架项目的样板代码",
        descriptionEn: "Boilerplate code for Astro framework projects",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Landing Page Boilerplate",
        titleEn: "Landing Page Boilerplate",
        url: "https://github.com/weijunext/landing-page-boilerplate",
        description: "落地页的项目样板代码",
        descriptionEn: "Project boilerplate code for landing pages",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Viggle AI WebUI",
        titleEn: "Viggle AI WebUI",
        url: "https://github.com/ai-aigc-studio/Viggle-AI-WebUI",
        description: "Viggle AI的Web用户界面",
        descriptionEn: "Web user interface for Viggle AI",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "New Blog",
        titleEn: "New Blog",
        url: "https://github.com/weijunext/new-blog",
        description: "博客网站模板",
        descriptionEn: "Blog website template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Gapis Money",
        titleEn: "Gapis Money",
        url: "https://github.com/weijunext/gapis.money",
        description: "金融相关网站模板",
        descriptionEn: "Financial related website template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Hunt Screens",
        titleEn: "Hunt Screens",
        url: "https://github.com/daimajia/huntscreens",
        description: "屏幕截图收集展示网站模板",
        descriptionEn: "Screenshot collection display website template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Smart Excel AI",
        titleEn: "Smart Excel AI",
        url: "https://github.com/weijunext/smart-excel-ai",
        description: "智能Excel AI工具模板",
        descriptionEn: "Smart Excel AI tool template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Next.js VPS",
        titleEn: "Next.js VPS",
        url: "https://github.com/ashleyrudland/nextjs_vps",
        description: "基于Next.js的VPS管理面板模板",
        descriptionEn: "VPS management panel template based on Next.js",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Change Hairstyle AI",
        titleEn: "Change Hairstyle AI",
        url: "https://github.com/Pwntus/change-hairstyle-ai",
        description: "AI换发型应用模板",
        descriptionEn: "AI hairstyle changing application template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Green Screen Creator",
        titleEn: "Green Screen Creator",
        url: "https://github.com/replicate/green-screen-creator",
        description: "绿幕创建工具网站模板",
        descriptionEn: "Green screen creation tool website template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Open SaaS",
        titleEn: "Open SaaS",
        url: "https://github.com/wasp-lang/open-saas/",
        description: "开源SaaS项目模板",
        descriptionEn: "Open source SaaS project template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Just Ship",
        titleEn: "Just Ship",
        url: "https://github.com/ocluf/justship",
        description: "快速发布产品的项目模板",
        descriptionEn: "Project template for quickly shipping products",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Supanuxt SaaS",
        titleEn: "Supanuxt SaaS",
        url: "https://github.com/JavascriptMick/supanuxt-saas",
        description: "基于Supabase和Nuxt的SaaS模板",
        descriptionEn: "SaaS template based on Supabase and Nuxt",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "SaaSfly",
        titleEn: "SaaSfly",
        url: "https://github.com/saasfly/saasfly",
        description: "快速构建SaaS应用的框架模板",
        descriptionEn: "Framework template for quickly building SaaS applications",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Xlike Web",
        titleEn: "Xlike Web",
        url: "https://github.com/mundane799699/xlike-web",
        description: "Xlike社交网站模板",
        descriptionEn: "Xlike social website template",
        category: "template",
        image: "assets/images/placeholder-image.svg"
    },

    // 五、导航站模板
    {
        title: "Fre123 导航",
        titleEn: "Fre123 Navigation",
        url: "https://github.com/fre123-com/fre123-nav/",
        description: "Fre123导航站开源模板",
        descriptionEn: "Fre123 navigation site open source template",
        category: "nav",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "OSS Gallery",
        titleEn: "OSS Gallery",
        url: "https://github.com/dubinc/oss-gallery?ref=ossgallery",
        description: "开源软件画廊模板",
        descriptionEn: "Open source software gallery template",
        category: "nav",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "WebStack导航模板",
        titleEn: "WebStack Navigation Template",
        url: "https://github.com/WebStackPage/WebStackPage.github.io",
        description: "WebStack网址导航网站开源项目",
        descriptionEn: "WebStack URL navigation website open source project",
        category: "nav",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Tap4 AI WebUI",
        titleEn: "Tap4 AI WebUI",
        url: "https://github.com/6677-ai/tap4-ai-webui",
        description: "Tap4 AI工具导航界面",
        descriptionEn: "Tap4 AI tools navigation interface",
        category: "nav",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "GPTs Works",
        titleEn: "GPTs Works",
        url: "https://github.com/all-in-aigc/gpts-works",
        description: "GPTs工具导航与展示",
        descriptionEn: "GPTs tools navigation and showcase",
        category: "nav",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "UI Libs",
        titleEn: "UI Libs",
        url: "https://github.com/ddahan/ui-libs",
        description: "UI库导航与展示",
        descriptionEn: "UI libraries navigation and showcase",
        category: "nav",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Dokey AI Data",
        titleEn: "Dokey AI Data",
        url: "https://github.com/DokeyAI/dokeyai-data",
        description: "Dokey AI数据导航",
        descriptionEn: "Dokey AI data navigation",
        category: "nav",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Vercel Templates",
        titleEn: "Vercel Templates",
        url: "https://vercel.com/templates",
        description: "Vercel官方模板导航",
        descriptionEn: "Vercel official templates navigation",
        category: "nav",
        image: "assets/images/placeholder-image.svg"
    },

    // 六、资讯
    {
        title: "Reddit 子社区",
        titleEn: "Reddit Subreddit",
        url: "https://liberating-doll-b8a.notion.site/Reddit-1a8e8aed91b18021839ecba8b",
        description: "Reddit相关子社区列表",
        descriptionEn: "List of Reddit related subreddits",
        category: "news",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "谷歌搜索中心-SEO基础知识",
        titleEn: "Google Search Central - SEO Basics",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=zh-cn",
        description: "谷歌提供的SEO基础知识指南",
        descriptionEn: "SEO basic knowledge guide provided by Google",
        category: "news",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Ahrefs热门网站趋势",
        titleEn: "Top Trending Websites from Ahrefs",
        url: "https://ahrefs.com/websites#trending",
        description: "Ahrefs提供的热门网站趋势",
        descriptionEn: "Popular website trends provided by Ahrefs",
        category: "news",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "AI VIDEO SAAS TOOL",
        titleEn: "AI VIDEO SAAS TOOL",
        url: "https://docs.google.com/spreadsheets/d/1QOdqq9KbjQj1JZO43vc1pir2rnEEsMUXzTDATrOCn2k/edit?gid=0#gid=0",
        description: "AI视频SaaS工具列表",
        descriptionEn: "List of AI video SaaS tools",
        category: "news",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "Starter Story精选报告",
        titleEn: "Starter Story Premium Report",
        url: "https://docs.google.com/spreadsheets/d/1eUni44pIURML2VWFFXKzNmm-WKuuam9_ynr5Fo_Q74M/edit?gid=83151001#gid=83151001",
        description: "独立创业者报告2.0",
        descriptionEn: "Solopreneur Report 2.0",
        category: "news",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "月入$500+的副业项目",
        titleEn: "Projects Making $500+/month",
        url: "https://www.500mrr.com/",
        description: "2024年月入$500+的副业项目列表",
        descriptionEn: "List of side projects making $500+/month in 2024",
        category: "news",
        image: "assets/images/placeholder-image.svg"
    },
    {
        title: "HN创业讨论",
        titleEn: "Ask HN",
        url: "https://news.ycombinator.com/item?id=42373343",
        description: "Hacker News上的创业讨论",
        descriptionEn: "Startup discussions on Hacker News",
        category: "news",
        image: "assets/images/placeholder-image.svg"
    }
];

// 默认使用占位图片
const placeholder = "assets/images/placeholder-image.svg";

// DOM 元素
const cardsContainer = document.getElementById('cards-container');
const searchInput = document.getElementById('search-input');
const categoryTags = document.querySelectorAll('.category-tag');
const essentialSubcategories = document.getElementById('essential-subcategories');
const subcategoryTags = document.querySelectorAll('.subcategory-tag');
const langToggle = document.getElementById('lang-toggle');

// 当前状态
let currentLang = 'zh-CN';
let currentCategory = 'all';
let currentSubcategory = 'all';

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 初始化UI文本
    updateUIText();
    
    // 初始化卡片
    renderCards(resources);
    
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);
    
    // 主分类筛选功能
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除所有标签的active类
            categoryTags.forEach(t => t.classList.remove('active'));
            // 为当前点击的标签添加active类
            this.classList.add('active');
            // 更新当前分类
            currentCategory = this.dataset.category;
            
            // 显示/隐藏二级分类菜单
            if (currentCategory === 'essential') {
                essentialSubcategories.classList.remove('hidden');
                // 重置二级分类选择
                subcategoryTags.forEach(t => {
                    if (t.dataset.subcategory === 'all') {
                        t.classList.add('active');
                    } else {
                        t.classList.remove('active');
                    }
                });
                currentSubcategory = 'all';
            } else {
                essentialSubcategories.classList.add('hidden');
                currentSubcategory = 'all';
            }
            
            // 重新渲染卡片
            filterCards();
        });
    });
    
    // 二级分类筛选功能
    subcategoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除所有标签的active类
            subcategoryTags.forEach(t => t.classList.remove('active'));
            // 为当前点击的标签添加active类
            this.classList.add('active');
            // 更新当前二级分类
            currentSubcategory = this.dataset.subcategory;
            // 重新渲染卡片
            filterCards();
        });
    });
    
    // 语言切换功能
    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
        document.documentElement.lang = currentLang;
        
        // 更新UI文本
        updateUIText();
        
        // 重新渲染卡片
        renderCards(getFilteredResources());
    });
    
    // 创建回到顶部按钮
    createBackToTopButton();
});

// 创建回到顶部按钮
function createBackToTopButton() {
    // 创建按钮元素
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top-btn';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = currentLang === 'zh-CN' ? '回到顶部' : 'Back to top';
    
    // 设置按钮样式
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #3182CE;
        color: white;
        font-size: 24px;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transition: background-color 0.3s, transform 0.3s;
    `;
    
    // 鼠标悬停效果
    backToTopBtn.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#2c5282';
        this.style.transform = 'translateY(-3px)';
    });
    
    backToTopBtn.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#3182CE';
        this.style.transform = 'translateY(0)';
    });
    
    // 点击滚动到顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 监听页面滚动事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // 当页面滚动超过300px时显示按钮
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // 将按钮添加到页面
    document.body.appendChild(backToTopBtn);
}

// 更新UI文本时同时更新回到顶部按钮的提示文本
function updateUIText() {
    if (currentLang === 'zh-CN') {
        searchInput.placeholder = '搜索...';
        langToggle.textContent = '中文 / EN';
        document.title = '导航站 - 网站资源导航';
        
        // 更新回到顶部按钮的提示文本
        const backToTopBtn = document.getElementById('back-to-top-btn');
        if (backToTopBtn) {
            backToTopBtn.title = '回到顶部';
        }
        
        // 更新主分类标签
        const categoryLabels = {
            'all': '全部',
            'keyword': '需求收集和关键词调研',
            'essential': '上站必备',
            'research': '竞品调研',
            'template': '上站模版',
            'nav': '导航站模板',
            'news': '资讯'
        };
        
        categoryTags.forEach(tag => {
            const category = tag.dataset.category;
            tag.textContent = categoryLabels[category] || category;
        });
        
        // 更新二级分类标签
        document.querySelector('#essential-subcategories span').textContent = '二级分类:';
        const subcategoryLabels = {
            'all': '全部',
            'domain-search': '域名查询',
            'domain-register': '域名注册',
            'hosting': '代码&网站托管',
            'data': '数据后台'
        };
        
        subcategoryTags.forEach(tag => {
            const subcategory = tag.dataset.subcategory;
            tag.textContent = subcategoryLabels[subcategory] || subcategory;
        });
    } else {
        searchInput.placeholder = 'Search...';
        langToggle.textContent = 'CN / English';
        document.title = 'Navigation - Website Resource Navigation';
        
        // 更新回到顶部按钮的提示文本
        const backToTopBtn = document.getElementById('back-to-top-btn');
        if (backToTopBtn) {
            backToTopBtn.title = 'Back to top';
        }
        
        // 更新主分类标签
        const categoryLabels = {
            'all': 'All',
            'keyword': 'Keyword Research',
            'essential': 'Website Essentials',
            'research': 'Competitor Research',
            'template': 'Website Templates',
            'nav': 'Navigation Templates',
            'news': 'News'
        };
        
        categoryTags.forEach(tag => {
            const category = tag.dataset.category;
            tag.textContent = categoryLabels[category] || category;
        });
        
        // 更新二级分类标签
        document.querySelector('#essential-subcategories span').textContent = 'Subcategories:';
        const subcategoryLabels = {
            'all': 'All',
            'domain-search': 'Domain Search',
            'domain-register': 'Domain Registration',
            'hosting': 'Code & Hosting',
            'data': 'Data Dashboard'
        };
        
        subcategoryTags.forEach(tag => {
            const subcategory = tag.dataset.subcategory;
            tag.textContent = subcategoryLabels[subcategory] || subcategory;
        });
    }
}

// 搜索处理函数
function handleSearch() {
    filterCards();
}

// 过滤卡片
function filterCards() {
    const filteredResources = getFilteredResources();
    renderCards(filteredResources);
}

// 获取过滤后的资源
function getFilteredResources() {
    const searchTerm = searchInput.value.toLowerCase();
    
    return resources.filter(resource => {
        // 主分类筛选
        const categoryMatch = currentCategory === 'all' || resource.category === currentCategory;
        
        // 二级分类筛选 (仅当主分类为"上站必备"时)
        let subcategoryMatch = true;
        if (resource.category === 'essential' && currentSubcategory !== 'all') {
            subcategoryMatch = resource.subcategory === currentSubcategory;
        }
        
        // 搜索筛选
        const title = currentLang === 'zh-CN' ? resource.title : resource.titleEn;
        const description = currentLang === 'zh-CN' ? resource.description : resource.descriptionEn;
        
        const searchMatch = title.toLowerCase().includes(searchTerm) || 
                           description.toLowerCase().includes(searchTerm) || 
                           resource.url.toLowerCase().includes(searchTerm);
        
        return categoryMatch && subcategoryMatch && searchMatch;
    });
}

// 渲染卡片
function renderCards(resources) {
    // 清空容器
    cardsContainer.innerHTML = '';
    
    // 如果没有匹配的资源
    if (resources.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'col-span-full text-center py-12 text-gray-500';
        noResults.textContent = currentLang === 'zh-CN' ? '没有找到匹配的资源' : 'No matching resources found';
        cardsContainer.appendChild(noResults);
        return;
    }
    
    // 渲染每个卡片
    resources.forEach((resource, index) => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.style.animationDelay = `${index * 0.05}s`;
        
        // 二级分类标签（仅对上站必备分类显示）
        let subcategoryLabel = '';
        if (resource.category === 'essential' && resource.subcategory) {
            const subcategoryText = currentLang === 'zh-CN' ? 
                getSubcategoryChineseName(resource.subcategory) : 
                getSubcategoryEnglishName(resource.subcategory);
            
            subcategoryLabel = `<span class="absolute top-2 right-2 bg-primary bg-opacity-90 text-white text-xs px-2 py-1 rounded-full z-10">${subcategoryText}</span>`;
        }
        
        // 使用Google S2作为可靠的截图源（显示网站favicon）
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(resource.url)}&sz=128`;
        
        // 使用第三方免费截图服务
        const screenshotUrl = `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${encodeURIComponent(resource.url)}`;
        
        // 卡片内容
        const title = currentLang === 'zh-CN' ? resource.title : resource.titleEn;
        const description = currentLang === 'zh-CN' ? resource.description : resource.descriptionEn;
        
        // 创建带有网站背景色和favicon的自定义卡片背景
        const cardStyle = `
            background-color: #87CEEB;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
        `;
        
        const faviconStyle = `
            width: 64px;
            height: 64px;
            object-fit: contain;
            margin-bottom: 10px;
        `;
        
        const titleStyle = `
            font-size: 14px;
            color: white;
            text-align: center;
            font-weight: bold;
            padding: 0 10px;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        `;
        
        card.innerHTML = `
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="relative">
                ${subcategoryLabel}
                <div class="card-img-container">
                    <img src="${screenshotUrl}" alt="${title}" loading="lazy" onerror="
                        this.outerHTML = '<div style=\"${cardStyle}\"><img src=\"${faviconUrl}\" style=\"${faviconStyle}\" onerror=\"this.style.display=\'none\'\"><div style=\"${titleStyle}\">${title}</div></div>';
                    ">
                </div>
                <div class="card-content">
                    <h3 class="font-semibold text-lg mb-1">${title}</h3>
                    <p class="text-gray-600 text-sm">${description}</p>
                </div>
            </a>
        `;
        
        cardsContainer.appendChild(card);
    });
}

// 获取二级分类的中文名称
function getSubcategoryChineseName(subcategory) {
    const names = {
        'domain-search': '域名查询',
        'domain-register': '域名注册',
        'hosting': '代码&网站托管',
        'data': '数据后台'
    };
    return names[subcategory] || subcategory;
}

// 获取二级分类的英文名称
function getSubcategoryEnglishName(subcategory) {
    const names = {
        'domain-search': 'Domain Search',
        'domain-register': 'Domain Registration',
        'hosting': 'Code & Hosting',
        'data': 'Data Dashboard'
    };
    return names[subcategory] || subcategory;
} 