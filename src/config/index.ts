import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Vishva - Your All-in-One AI Companion",
        template: `%s | Vishva`
    },
    description: "Vishva is your all-in-one AI platform for chat, image generation, coding, and everything AI can do. Unlock endless possibilities with advanced AI capabilities.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Vishva - Your All-in-One AI Companion",
        description: "Vishva is your all-in-one AI platform for chat, image generation, coding, and everything AI can do. Unlock endless possibilities with advanced AI capabilities.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Vishva - Your All-in-One AI Companion",
        description: "Vishva is your all-in-one AI platform for chat, image generation, coding, and everything AI can do. Unlock endless possibilities with advanced AI capabilities.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://vishva-app.vercel.app"),
};
