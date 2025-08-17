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

import { CrossPlatformCardContent } from "@/entities/cards/CrossPlatformCardContent";

import { CauswPanelHandle } from "@/entities/CauswPanelHandle";
import { UnderConstructionBlock } from "@/entities/UnderConstructionBlock";

const CARDS = [
    {
        main: "1. 어떤 기기에서도 쓸 수 있도록",
        sub: "Cross-Platform (Web & App) 지원",
        content: <CrossPlatformCardContent />,
    },
    {
        main: "2. 선배의 자랑, 후배의 미래가 이어질 수 있도록",
        sub: "경조사, 동문 수첩 기능 지원",
        content: <UnderConstructionBlock className="text-[#7a7979]" />,
    },
    {
        main: "3. 재학생의 안정적인 학부 활동을 위해",
        sub: "중앙대학교 소프트웨어 학부 활동 지원",
        content: <UnderConstructionBlock className="text-[#7a7979]" />,
    },
    {
        main: "4. 자유로운 커뮤니티가 될 수 있도록",
        sub: "게시판, 댓글을 넘어서 투표 기능 지원",
        content: <UnderConstructionBlock className="text-[#7a7979]" />,
    },
    {
        main: "5. 안전한 커뮤니티가 될 수 있도록",
        sub: "중앙대학교 학부 졸업생 및 재학생 인증 시스템",
        content: <UnderConstructionBlock className="text-[#7a7979]" />,
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
                className={`flex h-[calc(20vh-15px)] flex-col items-center justify-center gap-1 pt-5 transition-opacity duration-200 ${
                    fade ? "opacity-100" : "opacity-0"
                }`}
            >
                <strong className="text-2xl">{CARDS[step].main}</strong>
                <span className="ml-1 text-lg">{CARDS[step].sub}</span>
            </div>
            <Carousel className="w-full">
                <CarouselContent handleStepChange={handleStepChange}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="bg-[#E6E8F3]">
                                    <CardContent className="flex h-[80vh] items-center justify-center p-6">
                                        {CARDS[index].content}
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
