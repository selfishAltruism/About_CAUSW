"use client";

import { User2, Building2, Map, Github, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/shared/shadcn/components/ui/sidebar";
import { cn } from "../shadcn/lib/utils";

// Menu items.
const items = [
    {
        title: <>What is 동네: CAUSW?</>,
        url: "/",
        icon: (
            <Image
                src="/Group 483.svg"
                alt="causw_app_icon"
                width={20}
                height={20}
                className="-ml-[2px] -mr-[2px]"
            />
        ),
    },
    {
        title: <>Who made?</>,
        url: "/member/2025-1",
        icon: <User2 />,
    },
    {
        title: <>Who Supported?</>,
        url: "/ccssaa",
        icon: <Building2 />,
    },
];

export function AppSidebar() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    console.log("/" + segments[0]);

    return (
        <Sidebar variant="floating">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>About 동네: CAUSW</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className={cn(
                                                "text-[13px]",
                                                (segments[0] ?? "") ===
                                                    (item.url
                                                        .split("/")
                                                        .filter(Boolean)[0] ??
                                                        "") && "!text-sub",
                                            )}
                                        >
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuButton asChild className="text-gray-400">
                    <a
                        href="https://github.com/CAUCSE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github />
                        Team Organizations.
                    </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className="text-gray-400">
                    <a
                        href="https://www.instagram.com/causwcse_dongne/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram />
                        Team Instagram.
                    </a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild className="text-gray-400">
                    <a
                        href="https://github.com/selfishAltruism"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <User2 />
                        <span>Who made this?</span>
                    </a>
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    );
}
