import Image from "next/image";

import {
    ScrollArea,
    ScrollBar,
} from "@/shared/shadcn/components/ui/scroll-area";
import { TEAM_2025_1, TEAM_2024_1, TEAM_2024_2 } from "@/shared/const/member";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/shadcn/components/ui/breadcrumb";

import TeamOrgFullScreen from "@/entities/member/TeamOrgFullScreen";

type Props = { params: { year: string } };

const SEASON_LIST = ["2024-1", "2024-2", "2025-1", "2025-2"];

export default function Page({ params }: Props) {
    const { year } = params;

    const team =
        year === "2025-1"
            ? TEAM_2025_1
            : year === "2024-2"
              ? TEAM_2024_2
              : TEAM_2024_1;

    return (
        <ScrollArea className="h-screen w-full">
            {/* Mobile */}
            <Breadcrumb className="fixed bottom-4 left-0 z-20 flex w-screen justify-center lg:hidden">
                <BreadcrumbList className="text-xs">
                    <BreadcrumbPage className="mr-1 font-bold">
                        CAUSW ICT 위원회
                    </BreadcrumbPage>
                    {SEASON_LIST.map((item, idx) => (
                        <>
                            <BreadcrumbItem key={item}>
                                {year === item ? (
                                    <BreadcrumbPage className="font-bold">
                                        {item}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={"/member/" + item}>
                                        {item}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {idx !== SEASON_LIST.length - 1 && (
                                <BreadcrumbSeparator key={item} />
                            )}
                        </>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex h-full w-full flex-col items-center justify-center">
                <span className="pt-7 text-lg max-lg:hidden">
                    중앙대학교 소프트웨어학과 ICT 위원회
                </span>
                {/* PC */}
                <Breadcrumb className="z-20 -mb-8 pt-[2px] max-lg:hidden">
                    <BreadcrumbList>
                        {SEASON_LIST.map((item, idx) => (
                            <>
                                <BreadcrumbItem key={item}>
                                    {year === item ? (
                                        <BreadcrumbPage className="font-bold">
                                            {item}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink
                                            href={"/member/" + item}
                                        >
                                            {item}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {idx !== SEASON_LIST.length - 1 && (
                                    <BreadcrumbSeparator key={item} />
                                )}
                            </>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
                {year === "2025-2" ? (
                    <div className="flex h-[93vh] flex-col items-center justify-center gap-3">
                        <Image
                            src="/recruiting_img.png"
                            width={175}
                            height={175}
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
                    <TeamOrgFullScreen
                        pm={team.pm}
                        feLead={team.fe.lead}
                        feMembers={team.fe.members}
                        beLead={team.be.lead}
                        beMembers={team.be.members}
                        pdMembers={team.pd.members}
                    />
                )}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
