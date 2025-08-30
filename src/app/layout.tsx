import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";

import { SidebarProvider } from "@/shared/shadcn/components/ui/sidebar";
import { AppSidebar } from "@/shared/ui/AppSidebar";
import { Monitor } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "About CAUSW",
    description:
        "중앙대학교 소프트웨어학부에서 선배의 자랑, 후배의 미래가 연결될 수 있도록 졸업생과 재학생을 잇는 네트워킹 서비스, CAUSW 서비스",
    keywords: [
        "CAUSW",
        "동문네트워크",
        "중앙대학교",
        "cau",
        "소프트웨어학부",
        "소프트웨어학",
        "졸업생",
        "재학생",
        "ICT 위원회",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} font-sans`}>
                <a
                    href="https://causw.co.kr/"
                    className="fixed bottom-4 right-3 z-40 flex h-24 w-60 flex-col items-center justify-center rounded-xl border-0 bg-gradient-to-r from-[#388cf9] to-[#005cd3] bg-[length:200%_200%] text-white shadow-2xl transition-all duration-500 hover:animate-gradient"
                >
                    <span className="text-sm">중앙대학교 소프트웨어학부</span>
                    <span className="text-sm">졸업생 혹은 재학생이라면,</span>
                    <strong className="text-[17px]">
                        CAUSW 서비스 바로가기
                    </strong>
                </a>
                <div className="fixed z-50 flex h-screen w-screen items-center justify-center gap-2 bg-white text-[10px] md:hidden">
                    <Monitor /> 모바일 뷰는 지원되지 않습니다.
                    <span className="absolute bottom-4 text-gray-400">
                        CAUSW 서비스 지원된다고 하던데..{" "}
                        <a
                            href="https://causw.co.kr/"
                            className="text-blue-700 underline"
                        >
                            바로가기
                        </a>
                    </span>
                </div>
                <SidebarProvider>
                    <AppSidebar />
                    {children}
                </SidebarProvider>
            </body>
        </html>
    );
}
