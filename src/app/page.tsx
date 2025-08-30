import Image from "next/image";

import { CauswFeaturePanel } from "@/widgets/CauswFeaturePanel";
import { CauswPanelHandle } from "@/entities/CauswPanelHandle";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col">
            <div className="absolute left-[-256px] top-0 z-[9998] flex h-screen w-[calc(100vw-8px)] items-center justify-center bg-sub">
                <div className="z-[9999] flex flex-col items-center gap-1 text-xl text-white">
                    <span>중앙대학교 소프트웨어학부에서</span>
                    <span>선배의 자랑, 후배의 미래가 연결될 수 있도록.</span>
                    <strong>졸업생과 재학생을 잇는 네트워킹 서비스</strong>
                    <div className="mt-3 flex items-center gap-3 pl-1 text-5xl">
                        <Image
                            src="/Group 483.svg"
                            alt="causw_app_icon"
                            width={50}
                            height={50}
                        />
                        <strong>CAUSW</strong>
                    </div>
                </div>
                <Image
                    className="absolute bottom-0 left-0"
                    src="/main_background_images/Vector23(2).svg"
                    alt="causw_sub_img"
                    width={320}
                    height={320}
                />
                <Image
                    className="absolute right-0 top-[193.5px]"
                    src="/main_background_images/Vector21.svg"
                    alt="causw_sub_img"
                    width={670}
                    height={670}
                />
                <Image
                    className="absolute right-0 top-0"
                    src="/main_background_images/Vector22.svg"
                    alt="causw_sub_img"
                    width={260}
                    height={260}
                />
                <CauswPanelHandle mode="MAIN" />
            </div>{" "}
            <div className="absolute top-[100vh] flex h-screen w-full flex-col">
                <CauswFeaturePanel />
            </div>
        </main>
    );
}
