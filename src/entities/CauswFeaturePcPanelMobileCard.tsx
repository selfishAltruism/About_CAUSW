"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

const CONTENT: { mainContent: ReactNode; subContent: ReactNode }[] = [
    { mainContent: null, subContent: null },
    {
        mainContent: (
            <>
                <span>직군/직업 기반 정보 공유를 통해서</span>
                <span>선배에게 도움을 요청할 수 있도록.</span>

                <strong className="text-[17px]">
                    중앙대학교 소프트웨어학부의
                    <span className="text-sub"> 동문 수첩</span>
                </strong>
            </>
        ),
        subContent: (
            <>
                <span>GitHub, LinkedIn 등 </span>
                <span>외부 서비스 연동을 통해</span>

                <strong className="text-[17px]">
                    <span className="text-sub">개발자 친화적인 네트워크 </span>
                    형성 지원
                </strong>
            </>
        ),
    },
    {
        mainContent: (
            <>
                <span>직접 찾아서 확인해야 되는 불편한 공지 대신,</span>
                <span>Web Crawling 기반으로 빠르게 정리한</span>
                <strong className="text-[17px]">
                    <span className="text-sub">소프트웨어학부 공지 게시판</span>
                </strong>
            </>
        ),
        subContent: (
            <>
                <span>학생회의 열정적인 행사와</span>
                <span>나만의 학부 건물 사물함을 관리할 수 있는</span>
                <strong className="text-[17px]">
                    <span className="text-sub">학생회 공지 게시판 </span>&
                    <span className="text-sub"> 사물함 관리 기능</span>
                </strong>
            </>
        ),
    },
    {
        mainContent: (
            <>
                <span>생산적이고, 편안한 커뮤니티가 될 수 있도록</span>
                <strong className="text-[17px]">
                    <span className="text-sub">
                        게시판, 게시글 생성 및 관리 기능
                    </span>
                </strong>
            </>
        ),
        subContent: (
            <>
                <span>학부 내부 많은 목소리를 듣기 위해서</span>
                <strong className="text-[17px]">
                    <span className="text-sub">투표, 익명 댓글 </span> 지원
                </strong>
            </>
        ),
    },
    { mainContent: null, subContent: null },
];

export const CauswFeaturePcPanelMobileCard = ({ step }: { step: number }) => {
    /* const [firstCardIndex, setFirstCardIndex] = useState(0); */

    return (
        <div className="flex h-full w-full gap-5">
            <div className="flex flex-1 flex-col items-end justify-center gap-3">
                <span className="flex flex-col items-end">
                    {CONTENT[step].mainContent}
                </span>

                <div className="flex gap-3">
                    <Image
                        src={`/causw_features/${step + 1}_1.png`}
                        width={260}
                        height={260}
                        alt="main_img_1"
                        className="z-10 -mr-48 mt-6 shadow-lg shadow-[#00000066] 2xl:mr-0 2xl:mt-0"
                    />
                    <Image
                        src={`/causw_features/${step + 1}_2.png`}
                        width={260}
                        height={260}
                        alt="main_img_2"
                        className="mb-6 shadow-lg shadow-[#00000066] 2xl:mb-0"
                    />
                </div>
            </div>

            <div className="flex flex-1 flex-col items-start justify-center gap-3">
                <div className="flex gap-3">
                    <Image
                        src={`/causw_features/${step + 1}_3.png`}
                        width={260}
                        height={260}
                        alt="main_img_3"
                        className="z-10 -mr-48 mt-6 shadow-lg shadow-[#00000066] 2xl:mr-0 2xl:mt-0"
                    />
                    <Image
                        src={`/causw_features/${step + 1}_4.png`}
                        width={260}
                        height={260}
                        alt="main_img_4"
                        className="mb-6 shadow-lg shadow-[#00000066] 2xl:mb-0"
                    />
                </div>

                <span className="flex flex-col items-start">
                    {CONTENT[step].subContent}
                </span>
            </div>
        </div>
    );
};
