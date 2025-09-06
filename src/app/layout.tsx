import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";

import {
    SidebarProvider,
    SidebarTrigger,
} from "@/shared/shadcn/components/ui/sidebar";
import { AppSidebar } from "@/shared/ui/AppSidebar";
import { Monitor } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "About 동네: CAUSW",
    description:
        "중앙대학교 소프트웨어학과에서 선배의 자랑, 후배의 미래가 연결될 수 있도록 졸업생과 재학생을 잇는 네트워킹 서비스, 동네: CAUSW 서비스",
    keywords: [
        "동네",
        "동네: CAUSW",
        "CAUSW",
        "동문네트워크",
        "중앙대학교",
        "cau",
        "소프트웨어학과",
        "소프트웨어학",
        "졸업생",
        "재학생",
        "ICT 위원회",
        "학생회",
    ],
    icons: {
        icon: [
            { url: "/favicon/favicon.ico", sizes: "any" },
            {
                url: "/favicon/favicon-32x32.png",
                type: "image/png",
                sizes: "32x32",
            },
            {
                url: "/favicon/favicon-16x16.png",
                type: "image/png",
                sizes: "16x16",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} font-sans`}>
                {/* PC */}
                <a
                    href="https://causw.co.kr/"
                    className="fixed bottom-4 right-3 z-40 flex h-24 w-60 flex-col items-center justify-center rounded-xl border-0 bg-gradient-to-r from-[#388cf9] to-[#005cd3] bg-[length:200%_200%] text-white shadow-2xl transition-all duration-500 hover:animate-gradient max-xl:hidden"
                >
                    <span className="text-sm">중앙대학교 소프트웨어학과</span>
                    <span className="text-sm">졸업생 혹은 재학생이라면,</span>
                    <strong className="text-[17px]">
                        동네: CAUSW 바로가기
                    </strong>
                </a>

                {/* Mobile */}
                <a
                    href="https://causw.co.kr/"
                    className="fixed right-3 top-3 z-10 rounded-md border-0 bg-gradient-to-r from-[#388cf9] to-[#005cd3] bg-[length:200%_200%] p-1 px-3 text-white shadow-2xl transition-all duration-500 active:animate-gradient lg:hidden"
                >
                    <strong className="text-xs">동네: CAUSW 바로가기</strong>
                </a>

                <SidebarProvider>
                    <SidebarTrigger className="fixed left-3 top-3 z-30 h-[32px] w-[32px] bg-sub text-white active:bg-[#388cf9] active:text-white lg:hidden" />
                    <AppSidebar />
                    {children}
                </SidebarProvider>
            </body>
        </html>
    );
}
