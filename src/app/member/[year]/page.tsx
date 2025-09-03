import React from "react";
import {
    ScrollArea,
    ScrollBar,
} from "@/shared/shadcn/components/ui/scroll-area";

import TeamOrgFullScreen from "@/shared/ui/TeamOrgFullScreen";
import { TEAM_2025_1 } from "@/shared/const/member";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/shadcn/components/ui/breadcrumb";
import { UnderConstructionBlock } from "@/entities/UnderConstructionBlock";
import Image from "next/image";

type Props = { params: { year: string } };

export default function Page({ params }: Props) {
    const { year } = params;

    const team = TEAM_2025_1; // TODO: 2024 추가 필요.

    return (
        <ScrollArea className="h-screen w-full">
            {/* Mobile */}
            <Breadcrumb className="fixed bottom-4 left-0 z-20 flex w-screen justify-center lg:hidden">
                <BreadcrumbList className="text-xs">
                    <BreadcrumbItem>
                        {year === "2024-1" ? (
                            <BreadcrumbPage>2024-1</BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink href="/member/2024-1">
                                2024-1
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        {year === "2024-2" ? (
                            <BreadcrumbPage>2024-2</BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink href="/member/2024-2">
                                2024-2
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        {year === "2025-1" ? (
                            <BreadcrumbPage>2025-1</BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink href="/member/2025-1">
                                2025-1
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        {year === "2025-2" ? (
                            <BreadcrumbPage>2025-2</BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink href="/member/2025-2">
                                2025-2
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex h-full w-full flex-col items-center justify-center">
                {/* PC */}
                <Breadcrumb className="z-20 -mb-8 pt-7 max-lg:hidden">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            {year === "2024-1" ? (
                                <BreadcrumbPage>2024-1</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href="/member/2024-1">
                                    2024-1
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {year === "2024-2" ? (
                                <BreadcrumbPage>2024-2</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href="/member/2024-2">
                                    2024-2
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {year === "2025-1" ? (
                                <BreadcrumbPage>2025-1</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href="/member/2025-1">
                                    2025-1
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {year === "2025-2" ? (
                                <BreadcrumbPage>2025-2</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href="/member/2025-2">
                                    2025-2
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                {year === "2025-1" ? (
                    <TeamOrgFullScreen
                        pm={team.pm}
                        feLead={team.fe.lead}
                        feMembers={team.fe.members}
                        beLead={team.be.lead}
                        beMembers={team.be.members}
                        pdMembers={team.pd.members}
                    />
                ) : year === "2025-2" ? (
                    <div className="flex h-[93vh] flex-col items-center justify-center gap-3">
                        <Image
                            src="/recruiting_img.png"
                            width={250}
                            height={250}
                            alt="recruiting_img"
                        />
                        <span className="flex gap-2">
                            지원 당장 지금!
                            <a
                                href="https://forms.gle/Jpt3YWJWXvWKAuM47"
                                className="text-blue-700 underline"
                            >
                                지원하기
                            </a>
                        </span>
                    </div>
                ) : (
                    <div className="flex h-[calc(100vh-50px)] w-full items-center justify-center">
                        <UnderConstructionBlock />
                    </div>
                )}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
