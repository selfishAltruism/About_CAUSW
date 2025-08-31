"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";

const CONTENT: { mainContent: ReactNode; subContent: ReactNode }[] = [
    { mainContent: null, subContent: null },
    { mainContent: null, subContent: null },
    { mainContent: null, subContent: null },
    { mainContent: null, subContent: null },
    {
        mainContent: (
            <>
                <span>증명 자료, 학적 상태 확인을 통한</span>
                <strong className="text-[17px]">
                    철저한 <span className="text-sub">인증 과정</span>
                </strong>
            </>
        ),
        subContent: (
            <>
                <span>입학년도, 학번 기반</span>
                <strong className="text-[17px]">
                    <span className="text-sub">회원가입</span>
                </strong>
            </>
        ),
    },
];

export const CauswFeaturePanelPcCard = ({ step }: { step: number }) => {
    /* const [firstCardIndex, setFirstCardIndex] = useState(0); */

    return (
        <div className="flex h-full w-full gap-5">
            <div className="flex flex-1 flex-col items-end justify-center gap-3">
                <div className="flex gap-3">
                    <Image
                        src={`/causw_features/${step + 1}_1.png`}
                        width={700}
                        height={700}
                        alt="main_img_1"
                        className="z-10 shadow-lg shadow-[#00000066]"
                    />
                </div>

                <span className="flex flex-col items-end">
                    {CONTENT[step].mainContent}
                </span>
            </div>

            <div className="flex flex-1 flex-col items-start justify-center gap-3">
                <span className="flex flex-col items-start">
                    {CONTENT[step].subContent}
                </span>

                <div className="flex gap-3">
                    <Image
                        src={`/causw_features/${step + 1}_2.png`}
                        width={700}
                        height={700}
                        alt="main_img_2"
                        className="shadow-lg shadow-[#00000066]"
                    />
                </div>
            </div>
        </div>
    );
};
