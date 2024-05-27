import { Footer, Navbar, Providers } from "@/components";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const SiteLayout = ({ children }: Props) => {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <main className="flex flex-col w-full">
                <Navbar />
                {children}
                <Footer />
            </main>
        </ClerkProvider>
    )
};

export default SiteLayout
