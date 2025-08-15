import Image from "next/image";

import { CauswFeaturePanel } from "@/widgets/CauswFeaturePanel";
import { CauswPanelHandle } from "@/entities/CauswPanelHandle";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col">
            <div className="absolute left-[-256px] flex h-screen w-[calc(100vw-8px)] items-center justify-center bg-sub" />
            <div className="relative z-10 flex h-screen w-full items-center justify-center">
                <div className="flex w-full flex-col-reverse justify-center p-10 xl:flex-row xl:items-center">
                    <div className="-mt-5 flex flex-col items-end gap-1 text-xl font-bold text-white xl:-mr-4 xl:mt-16">
                        <span className="xl:mr-[5.7px]">
                            중앙대학교 소프트웨어학부에서
                        </span>
                        <span>선배의 자랑, 후배의 미래가 연결될 수 있도록</span>
                        <span className="xl:-mr-[5.7px]">
                            졸업생과 재학생을 잇는 네트워킹 서비스
                        </span>
                        <span className="mt-2 text-5xl xl:-mr-[9px]">
                            CAUSW
                        </span>
                    </div>

                    <Image
                        src="/causw_logo.png"
                        alt="causw_logo"
                        width={500}
                        height={500}
                    />
                </div>

                <CauswPanelHandle mode="MAIN" />
            </div>
            <div className="absolute top-[100vh] flex h-screen w-full flex-col">
                <CauswFeaturePanel />
            </div>
        </main>
    );
}
