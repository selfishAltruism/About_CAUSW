import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";

import { SidebarProvider } from "@/shared/shadcn/components/ui/sidebar";
import { AppSidebar } from "@/shared/ui/AppSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CAUSWE",
    description: "CAUSWE",
    keywords: ["CAUSWE"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} font-sans`}>
                <SidebarProvider>
                    <AppSidebar />
                    {children}
                </SidebarProvider>
            </body>
        </html>
    );
}
