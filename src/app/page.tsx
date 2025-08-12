import { Card, CardContent } from "@/shared/shadcn/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/shadcn/components/ui/carousel";

import { CauswPanelHandle } from "@/entities/CauswPanelHandle";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col">
            <div className="absolute left-[-256px] flex h-screen w-[calc(100vw-8px)] items-center justify-center bg-[#00a9e7]" />
            <div className="relative z-10 flex h-screen w-full items-center justify-center">
                <div className="flex w-full items-center justify-center">
                    <div className="-mr-4 mt-8 flex flex-col items-end gap-1 text-xl font-bold text-white">
                        <span>
                            중앙대학교 소프트웨어 졸업생과 학부생을 잇고,
                        </span>
                        <span className="-mr-[5.7px]">
                            학부 활동과 자유로운 커뮤니케이션을 돕는 서비스.
                        </span>
                        <span className="-mr-[5.7px] mt-2 text-4xl">
                            CAUSW Web & App
                        </span>
                    </div>

                    <Image
                        src="/causw_logo.png"
                        alt="causw_logo"
                        width={500}
                        height={500}
                    />
                </div>

                <CauswPanelHandle />
            </div>
            <div className="absolute top-[100vh] flex h-screen w-full items-center justify-center">
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">
                                                {index + 1}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </main>
    );
}
