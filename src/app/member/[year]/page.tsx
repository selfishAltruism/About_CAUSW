import React from "react";
import {
    ScrollArea,
    ScrollBar,
} from "@/shared/shadcn/components/ui/scroll-area";

import TeamOrgFullScreen from "@/shared/ui/TeamOrgFullScreen";
import { TEAM_2025 } from "@/shared/const/member";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/shadcn/components/ui/breadcrumb";

type Props = { params: { year: string } };

export default function Page({ params }: Props) {
    const { year } = params;

    const team = year === "2024" ? TEAM_2025 : TEAM_2025;

    return (
        <ScrollArea className="h-screen w-full">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <Breadcrumb className="z-20 -mb-8 pt-7">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            {year === "2024" ? (
                                <BreadcrumbPage>2024</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href="/member/2024">
                                    2024
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {year === "2025" ? (
                                <BreadcrumbPage>2025</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href="/member/2025">
                                    2025
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <TeamOrgFullScreen
                    pm={team.pm}
                    feLead={team.fe.lead}
                    feMembers={team.fe.members}
                    beLead={team.be.lead}
                    beMembers={team.be.members}
                    pdMembers={team.pd.members}
                />
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
