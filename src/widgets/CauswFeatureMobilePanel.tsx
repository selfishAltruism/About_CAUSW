import Video from "@/entities/Video";
import Image from "next/image";

const ITEMS = [
    {
        idx: 1,
        main: (
            <>
                <span className="text-sub">어떤 기기에서도</span> 쓸 수 있도록
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
        idx: 2,
        main: (
            <>
                <span className="text-sub">선배의 자랑, 후배의 미래</span>가
                이어질 수 있도록
            </>
        ),
        sub: "중앙대학교 소프트웨어학부의 동문 수첩",
        content: (
            <div className="flex w-full justify-center gap-3">
                <Image
                    src={`/causw_features/2_1.png`}
                    width={200}
                    height={200}
                    alt="main_img_2_1"
                    className="-mr-16 mb-6 shadow-lg shadow-[#00000066]"
                />
                <Image
                    src={`/causw_features/2_2.png`}
                    width={200}
                    height={200}
                    alt="main_img_2_2"
                    className="mt-6 shadow-lg shadow-[#00000066]"
                />
            </div>
        ),
    },
    {
        main: (
            <>
                <span className="text-sub">개발자 친화적인 네트워크</span>가
                형성될 수 있도록
            </>
        ),
        sub: "GitHub, LinkedIn 등 외부 서비스 연동",
        content: (
            <div className="flex w-full justify-center gap-3">
                <Image
                    src={`/causw_features/2_3.png`}
                    width={200}
                    height={200}
                    alt="main_img_2_3"
                    className="-mr-16 mb-6 shadow-lg shadow-[#00000066]"
                />
                <Image
                    src={`/causw_features/2_4.png`}
                    width={200}
                    height={200}
                    alt="main_img_2_4"
                    className="mt-6 shadow-lg shadow-[#00000066]"
                />
            </div>
        ),
    },
    {
        idx: 3,
        main: (
            <>
                재학생의 <span className="text-sub">안정적인 학부 활동</span>을
                위해
            </>
        ),
        sub: "Web Crawling 기반 학부 공지 정리",
        content: (
            <div className="flex w-full justify-center gap-3">
                <Image
                    src={`/causw_features/3_1.png`}
                    width={200}
                    height={200}
                    alt="main_img_3_1"
                    className="-mr-16 mb-6 shadow-lg shadow-[#00000066]"
                />
                <Image
                    src={`/causw_features/3_2.png`}
                    width={200}
                    height={200}
                    alt="main_img_3_2"
                    className="mt-6 shadow-lg shadow-[#00000066]"
                />
            </div>
        ),
    },
    {
        main: (
            <>
                <span className="text-sub">학생회</span> 행사 참여와 나만의{" "}
                <span className="text-sub"> 사물함</span>을 관리할 수 있도록
            </>
        ),
        sub: "학생회 공지 게시판 & 사물함 관리 기능",
        content: (
            <div className="flex w-full justify-center gap-3">
                <Image
                    src={`/causw_features/3_3.png`}
                    width={200}
                    height={200}
                    alt="main_img_3_3"
                    className="-mr-16 mb-6 shadow-lg shadow-[#00000066]"
                />
                <Image
                    src={`/causw_features/3_4.png`}
                    width={200}
                    height={200}
                    alt="main_img_3_4"
                    className="mt-6 shadow-lg shadow-[#00000066]"
                />
            </div>
        ),
    },
    {
        idx: 4,
        main: (
            <>
                <span className="text-sub">생산적이고, 자유로운 커뮤니티</span>
                가 될 수 있도록
            </>
        ),
        sub: "게시판, 게시글 생성 및 관리 기능",
        content: (
            <div className="flex w-full justify-center gap-3">
                <Image
                    src={`/causw_features/4_1.png`}
                    width={200}
                    height={200}
                    alt="main_img_4_1"
                    className="-mr-16 mb-6 shadow-lg shadow-[#00000066]"
                />
                <Image
                    src={`/causw_features/4_2.png`}
                    width={200}
                    height={200}
                    alt="main_img_4_2"
                    className="mt-6 shadow-lg shadow-[#00000066]"
                />
            </div>
        ),
    },
    {
        main: (
            <>
                편안한 환경에서 <span className="text-sub">많은 목소리</span>를
                듣기 위해서
            </>
        ),
        sub: "투표, 익명 댓글 지원",
        content: (
            <div className="flex w-full justify-center gap-3">
                <Image
                    src={`/causw_features/4_3.png`}
                    width={200}
                    height={200}
                    alt="main_img_4_3"
                    className="-mr-16 mb-6 shadow-lg shadow-[#00000066]"
                />
                <Image
                    src={`/causw_features/4_4.png`}
                    width={200}
                    height={200}
                    alt="main_img_4_4"
                    className="mt-6 shadow-lg shadow-[#00000066]"
                />
            </div>
        ),
    },
    {
        idx: 5,
        main: (
            <>
                <span className="text-sub">안전한 커뮤니티</span>가 될 수 있도록
            </>
        ),
        sub: "증명 자료, 학적 상태 확인을 통한 인증 과정",
        content: (
            <div className="flex w-full flex-col items-center gap-3">
                <Image
                    src={`/causw_features/5_1.png`}
                    width={700}
                    height={700}
                    alt="main_img_1"
                    className="z-10 shadow-lg shadow-[#00000066]"
                />
                <Image
                    src={`/causw_features/5_2.png`}
                    width={700}
                    height={700}
                    alt="main_img_1"
                    className="z-10 shadow-lg shadow-[#00000066]"
                />
            </div>
        ),
    },
];

export const CauswFeatureMobilePanel = () => {
    return (
        <div className="absolute top-[100vh] flex w-full flex-col gap-2 pt-12 lg:hidden">
            {ITEMS.map((item) => (
                <div className="flex flex-col p-4" key={item.sub}>
                    {item.idx && (
                        <strong className="text-[16px]">{item.idx}.</strong>
                    )}
                    <strong className="text-sm">{item.main}</strong>
                    <span className="mb-3 text-xs">{item.sub}</span>
                    {item.content}
                </div>
            ))}
        </div>
    );
};
