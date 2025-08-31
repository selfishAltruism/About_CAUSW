"use client";

import { useState } from "react";

import { Card, CardContent } from "@/shared/shadcn/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/shadcn/components/ui/carousel";

import { CauswPanelHandle } from "@/entities/CauswPanelHandle";
import { UnderConstructionBlock } from "@/entities/UnderConstructionBlock";
import Video from "@/entities/Video";
import { CauswFeaturePanelMobileCard } from "@/entities/CauswFeaturePanelMobileCard";
import { CauswFeaturePanelPcCard } from "@/entities/CauswFeaturePanelPcCard";

const ITEMS = [
    {
        main: (
            <>
                <span className="text-sub">어떤 기기에서도</span> 쓸 수 있도록,
            </>
        ),
        sub: "반응형 디자인과 PWA를 통한 Cross-Platform(Web & App) 지원",
        content: (
            <Video
                src="/causw_features/response_design_2.mp4"
                playbackRate={3}
            />
        ),
    },
    {
        main: (
            <>
                <span className="text-sub">선배의 자랑, 후배의 미래</span>가
                이어질 수 있도록,
            </>
        ),
        sub: "동문 수첩, 경조사 기능 지원",
        content: <CauswFeaturePanelMobileCard step={1} />,
    },
    {
        main: (
            <>
                재학생의 <span className="text-sub">안정적인 학부 활동</span>을
                위해,
            </>
        ),
        sub: "중앙대학교 소프트웨어 학부 활동 지원",
        content: <CauswFeaturePanelMobileCard step={2} />,
    },
    {
        main: (
            <>
                <span className="text-sub">자유로운 커뮤니티</span>가 될 수
                있도록,
            </>
        ),
        sub: "게시판, 댓글을 넘어서 투표 기능 지원",
        content: <CauswFeaturePanelMobileCard step={3} />,
    },
    {
        main: (
            <>
                <span className="text-sub">안전한 커뮤니티</span>가 될 수
                있도록,
            </>
        ),
        sub: "중앙대학교 학부 졸업생 및 재학생 인증 시스템",
        content: <CauswFeaturePanelPcCard step={4} />,
    },
];

export const CauswFeaturePanel = () => {
    const [step, setStep] = useState(0);
    const [fade, setFade] = useState(true);

    const handleStepChange = (newStep: number) => {
        if (newStep < 0 || newStep > 4) return;

        setFade(false);
        setTimeout(() => {
            setStep(newStep);
            setFade(true);
        }, 200);
    };

    return (
        <>
            <CauswPanelHandle mode="CAUSW_FEATURE_PANEL" />
            <div
                className={`flex h-[calc(17vh-15px)] flex-col items-start justify-end gap-0 pb-1 pl-[2px] transition-opacity duration-200 ${
                    fade ? "opacity-100" : "opacity-0"
                }`}
            >
                <strong className="text-[20px]">{step + 1}.</strong>
                <strong className="text-[20px]">{ITEMS[step].main}</strong>
                <span className="text-[17px] text-[#5b5c60]">
                    {ITEMS[step].sub}
                </span>
            </div>
            <Carousel className="w-full">
                <CarouselContent handleStepChange={handleStepChange}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="bg-[#E6E8F3]">
                                    <CardContent className="flex h-[83vh] items-center justify-center p-12 pt-14">
                                        {ITEMS[index].content}
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
};
