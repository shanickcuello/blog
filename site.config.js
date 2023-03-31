const CONFIG = {
    // profile setting (required)
    profile: {
        name: "Shanick Gauthier",
        image: "/avatar.svg",
        role: "Fullstack engineer",
        bio: "I'm a software engineer specialized in mobile.\n" +
            "I have 6 years of experience as a Software Engineer specializing in\n" +
            "Mobile, Backend and VideoGames development. I am very concerned\n" +
            "about solid patterns, Test Driven Development (TDD) and Domain\n" +
            "Driven Design (DDD) among other design patterns. \n" +

            "But I'm not just a developer. I am also that spark of motivation for the\n" +
            "team, someone who is always pushing to improve, optimize processes\n" +
            "and actively participate in the entire agile cycle. Always learning.",
        email: "shanlogauthier@gmail.com",
        linkedin: "shanickcuellocuvelier",
        github: "shanickcuello",
        instagram: "shanickx",
    },
    projects: [
        {
            name: `Linktr`,
            href: "https://linktr.ee/shanick",
        },
    ],
    blog: {
        title: "Shanick blog",
        description: "welcome to shanick blog!",
        theme: "dark", // ['light', 'dark', 'auto']
    },

    // CONFIG configration (required)
    link: "https://blog-5ja3fim1v-shanickcuello.vercel.app/?order=desc",
    since: 2023, // If leave this empty, current year will be used.
    lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
    ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
    seo: {
        keywords: ["Blog", "Website", "Notion", "Shanick", "Shanick Gauthier Cuello", "Software engineer", "Unity developer"],
    },

    // notion configuration (required)
    notionConfig: {
        pageId: process.env.NOTION_PAGE_ID,
    },

    // plugin configuration (optional)
    googleAnalytics: {
        enable: false,
        config: {
            measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
        },
    },
    googleSearchConsole: {
        enable: false,
        config: {
            siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
        },
    },
    utterances: {
        enable: true,
        config: {
            repo: "morethanmin/morethan-log",
            "issue-term": "og:title",
            label: "💬 Utterances",
        },
    },
    cusdis: {
        enable: false,
        config: {
            host: "https://cusdis.com",
            appid: "", // Embed Code -> data-app-id value
        },
    },
    isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
