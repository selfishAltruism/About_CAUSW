import { FlowingLogos } from "@/entities/support/FlowingLogos";

export default function Page() {
    return (
        <>
            <FlowingLogos />

            <main className="flex h-screen w-full flex-col items-center justify-center gap-5">
                {/* 본문 텍스트 */}
                <span className="text-center text-sm lg:text-lg">
                    <strong>동네: CAUSW</strong>는 <br className="lg:hidden" />
                    <strong className="text-sub">크자회(CCSSAA)</strong>의
                    지원을 바탕으로 <br className="lg:hidden" />
                    운영되고 있습니다.
                </span>
                <span className="text-center text-xs text-gray-500 lg:text-sm">
                    크자회(CCSSAA)는 <br className="lg:hidden" />
                    중앙대학교 소프트웨어대학 동문회로,
                    <br />
                    중앙대학교 소프트웨어대학 <br className="lg:hidden" />
                    50주년을 맞아 창설되었습니다.
                </span>
                <span className="-mt-3 text-center text-sm text-gray-500 max-lg:hidden">
                    CCSSAA는 ‘CAU College of Software Student & Alumni
                    Association’의 약자로,
                    <br />
                    소프트웨어대학의 전 구성원들이 함께 발전하며 커 나가자는
                    뜻을 담았습니다.
                </span>
            </main>
        </>
    );
}
