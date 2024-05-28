import { Toaster } from "@/components/ui/sonner";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    font.className
                )}
            >
                <Toaster />
                {children}
            </body>
        </html>
    );
};
