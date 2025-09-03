import Image from "next/image";

import { CauswFeaturePcPanel } from "@/widgets/CauswFeaturePcPanel";
import { CauswFeatureMobilePanel } from "@/widgets/CauswFeatureMobilePanel";
import { CauswPanelHandle } from "@/entities/CauswPanelHandle";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col">
            <div className="absolute top-0 z-20 flex h-screen w-screen items-center justify-center bg-sub lg:left-[-256px] lg:z-[9998] lg:w-[calc(100vw-8px)]">
                <div className="max-lg:mb-18 z-30 flex flex-col items-center gap-1 text-sm text-white lg:z-[9999] lg:text-[20.5px]">
                    <span>중앙대학교 소프트웨어학부에서</span>
                    <span>선배의 자랑, 후배의 미래가 연결될 수 있도록.</span>
                    <strong>졸업생과 재학생을 잇는 네트워킹 서비스</strong>
                    <div className="mt-3 flex flex-col items-center gap-[5px] pl-1 text-lg lg:flex-row lg:gap-4 lg:text-5xl">
                        {/* PC */}
                        <Image
                            src="/Group 483.svg"
                            alt="causw_app_icon"
                            width={50}
                            height={50}
                            className="mt-[1px] max-lg:hidden"
                            /* style={{
                                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
                            }} */
                        />

                        {/* Mobile */}
                        <Image
                            src="/Group 483.svg"
                            alt="causw_app_icon"
                            width={65}
                            height={65}
                            className="mt-[1px] lg:hidden"
                            /* style={{
                                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
                            }} */
                        />
                        <strong>
                            <span className="lg:text-[46px]">동네</span>: CAUSW
                        </strong>
                    </div>
                </div>

                {/* PC */}
                <Image
                    className="absolute bottom-0 left-0 max-lg:hidden"
                    src="/main_background_images/Vector23(2).svg"
                    alt="causw_sub_img"
                    width={320}
                    height={320}
                />
                <Image
                    className="absolute right-0 top-[193.5px] max-lg:hidden"
                    src="/main_background_images/Vector21.svg"
                    alt="causw_sub_img"
                    width={670}
                    height={670}
                />
                <Image
                    className="absolute right-0 top-0 max-lg:hidden"
                    src="/main_background_images/Vector22.svg"
                    alt="causw_sub_img"
                    width={260}
                    height={260}
                />
                <CauswPanelHandle mode="MAIN" />

                {/* Mobile */}
                <Image
                    className="absolute bottom-0 left-0 lg:hidden"
                    src="/main_background_images/Vector23(2).svg"
                    alt="causw_sub_img"
                    width={160}
                    height={160}
                />
                <Image
                    className="absolute right-0 top-[210px] lg:hidden"
                    src="/main_background_images/Vector21.svg"
                    alt="causw_sub_img"
                    width={340}
                    height={340}
                />
                <Image
                    className="absolute right-0 top-0 lg:hidden"
                    src="/main_background_images/Vector22.svg"
                    alt="causw_sub_img"
                    width={125}
                    height={125}
                />
            </div>{" "}
            <div className="absolute top-[100vh] flex h-screen w-full flex-col max-lg:hidden">
                <CauswFeaturePcPanel />
            </div>
            <CauswFeatureMobilePanel />
        </main>
    );
}
