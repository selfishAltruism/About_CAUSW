import { Person } from "../ui/TeamOrgFullScreen";

export const TEAM_2025_1 = {
    pm: {
        id: "pm",
        name: "윤민규",
        github: "pstar987",
        avatarUrl: "/avatar/pstar987.jpg",
        domains: ["서비스 관리", "신규 기능 기획", "푸시 알림"],
    } as Person,
    pd: {
        members: [
            {
                id: "pd1",
                name: "정보운",
                github: "",
                domains: ["기획 / 디자인", "UX 설계"],
            },
            {
                id: "pd2",
                name: "이윤제",
                github: "",
                domains: ["UI 최신화", "홍보", "QA"],
            },
            {
                id: "pd3",
                name: "이해찬",
                github: "",
                domains: ["브랜딩", "앱 UI", "동문수첩 UI"],
            },
        ] as Person[],
    },
    be: {
        lead: {
            id: "be1",
            name: "한성재",
            github: "bingle625",
            avatarUrl: "/avatar/bingle625.jpg",
            domains: [
                "BE 파트장",
                "모니터링 시스템",
                "CI / CD",
                "Code Assurance",
            ],
        } as Person,
        members: [
            {
                id: "be2",
                name: "이가연",
                github: "GY102912",
                domains: ["flyway 시스템", "동문수첩", "이벤트"],
            },
            {
                id: "be3",
                name: "한지강",
                github: "sokft",
                domains: ["학적 인증", "쿼리 최적화", "크롤링"],
            },
            {
                id: "be4",
                name: "이우진",
                github: "riadan710",
                domains: ["트래픽 테스트", "경조사", "유저 관리"],
            },
            {
                id: "be5",
                name: "김민창",
                github: "idle2534",
                domains: ["권한 제어"],
            },
        ] as Person[],
    },
    fe: {
        lead: {
            id: "fe1",
            name: "김영현",
            github: "kyh0726",
            domains: ["FE 파트장", "인증 / 인가", "권한 제어", "CI / CD"],
        } as Person,
        members: [
            {
                id: "fe2",
                name: "손유진",
                github: "yugenius0213",
                domains: ["푸시 알림", "경조사 관리", "로그인"],
            },
            {
                id: "fe3",
                name: "라희수",
                github: "Head-ddy",
                domains: ["신고 / 차단", "사물함", "유저 관리"],
            },
            {
                id: "fe4",
                name: "김선희",
                github: "iris-starry",
                domains: ["동문수첩", "이벤트 배너", "경조사 신청"],
            },
            {
                id: "fe5",
                name: "이영재",
                github: "lee0jae330",
                domains: ["게시글", "게시판", "투표"],
            },
            {
                id: "fe6",
                name: "강민규",
                avatarUrl: "/avatar/selfishAltruism.jpg",
                github: "selfishAltruism",
                domains: ["공각기동대"],
            },
        ] as Person[],
    },
};
