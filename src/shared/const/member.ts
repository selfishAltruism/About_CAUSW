import { Person } from "../../entities/member/TeamOrgFullScreen";

export const TEAM_2025_1 = {
    pm: {
        id: "pm",
        name: "윤민규",
        github: "pstar987",
        avatarUrl: "/avatar/pstar987.jpg",
        domains: ["PM", "서비스 관리", "신규 기능 기획", "푸시 알림 BE"],
    } as Person,
    pd: {
        members: [
            {
                id: "pd1",
                name: "정보운",
                github: "",
                domains: ["Web UI/UX", "서비스 플로우 설계"],
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
                domains: ["App UI/UX", "브랜딩", "동문수첩"],
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
                "BE 팀장",
                "BE 모니터링 시스템",
                "CI/CD",
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
                domains: ["학적 인증", "쿼리 최적화", "Crawling"],
            },
            {
                id: "be4",
                name: "이우진",
                github: "riadan710",
                avatarUrl: "/avatar/riadan710.jpg",
                domains: ["트래픽 테스트", "경조사", "유저 관리", "사물함"],
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
            domains: [
                "FE 팀장",
                "인증/인가",
                "권한 제어",
                "CI/CD",
                "FSD Refactoring",
            ],
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
                domains: ["신고/차단", "사물함", "유저 관리"],
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
                avatarUrl: "/avatar/lee0jae330.jpg",
                domains: ["게시글", "게시판", "투표", "FSD Refactoring"],
            },
            {
                id: "fe6",
                name: "강민규",
                avatarUrl: "/avatar/selfishAltruism.jpg",
                github: "selfishAltruism",
                domains: ["공각기동대", "FSD Refactoring"],
            },
        ] as Person[],
    },
};

export const TEAM_2024_2 = {
    pm: {
        id: "pm-2024-2",
        name: "정상제",
        github: "sanggae4133",
        avatarUrl: "/avatar/sanggae4133.jpg",
        domains: ["PM", "BE Infra", "첨부파일 서버", "투표"],
    } as Person,
    pd: {
        members: [
            {
                id: "pd1-2024-2",
                name: "박은효",
                github: "",
                domains: ["Web UI/UX", "Mobile UI/UX"],
            },
            {
                id: "pd2-2024-3",
                name: "안종민",
                github: "",
                domains: ["QA", "기획"],
            },
        ],
    },
    be: {
        lead: {
            id: "be1-2024-2",
            name: "조명근",
            github: "realisshomyang",
            domains: ["BE 팀장", "Spring3 Refactoring", "동시성 제어", "홈"],
        } as Person,
        members: [
            {
                id: "be2-2024-2",
                name: "김동현",
                github: "zestbear",
                avatarUrl: "/avatar/zestbear.jpg",
                domains: ["게시판", "댓글", "Spring3 Refactoring", "DB Schema"],
            },
            {
                id: "be3-2024-2",
                name: "채승운",
                github: "",
                domains: [
                    "BE 모니터링",
                    "TDD",
                    "Spring3 Refactoring",
                    "DB Schema",
                ],
            },
            {
                id: "be4-2024-2",
                name: "현재환",
                github: "",
                domains: ["CI/CD", "Infra", "테스트 서버"],
            },
            {
                id: "be6-2024-2",
                name: "박은효",
                github: "",
                domains: ["게시판 관리", "권한 위임", "TDD"],
            },
            {
                id: "be7-2024-2",
                name: "민세원",
                github: "",
                domains: ["Crawling", "PW 변경", "TDD"],
            },
            {
                id: "be8-2024-2",
                name: "신성섭",
                github: "",
                domains: ["게시글 관리", "기록 관리", "TDD"],
            },
        ] as Person[],
    },
    fe: {
        lead: {
            id: "fe1-2024-2",
            name: "강민규",
            github: "selfishAltruism",
            avatarUrl: "/avatar/selfishAltruism.jpg",
            domains: [
                "FE 팀장",
                "Next.js Setting",
                "인증/인가",
                "상세설정",
                "홈",
            ],
        } as Person,
        members: [
            {
                id: "fe2-2024-2",
                name: "김영현",
                github: "kyh0726",
                domains: ["회원가입", "기본설정", "유저상세"],
            },
            {
                id: "fe3-2024-2",
                name: "이영재",
                github: "lee0jae330",
                avatarUrl: "/avatar/lee0jae330.jpg",
                domains: ["게시판", "설문/신청서", "사물함"],
            },
            {
                id: "fe4-2024-2",
                name: "이은화",
                github: "Ontheway-01",
                domains: ["게시글", "댓글/대댓글", "투표"],
            },
            {
                id: "fe5-2024-2",
                name: "오명진",
                github: "omjinLTS",
                domains: ["홈", "홈 설정", "상세설정"],
            },
        ] as Person[],
    },
};

export const TEAM_2024_1 = {
    pm: {
        id: "pm-2024-1",
        name: "정상제",
        github: "sanggae4133",
        avatarUrl: "/avatar/sanggae4133.jpg",
        domains: [
            "PM",
            "학적상태 관리",
            "학생회비",
            "Hexagonal 아키텍처",
            "DB Schema",
        ],
    } as Person,
    pd: {
        members: [] as Person[],
    },
    be: {
        lead: {
            id: "be1-2024-1",
            name: "조명근",
            github: "realisshomyang",
            domains: [
                "CI/CD",
                "사물함",
                "홈",
                "Hexagonal 아키텍처",
                "DB Schema",
            ],
        } as Person,
        members: [
            {
                id: "pd1-2024-1",
                name: "이기태",
                github: "",
                domains: ["개발환경 구축", "DB Schema"],
            },
            {
                id: "pd2-2024-1",
                name: "이예빈",
                github: "",
                domains: ["개발환경 구축", "DB Schema"],
            },
            {
                id: "be5-2024-2",
                name: "윤민규",
                github: "pstar987",
                avatarUrl: "/avatar/pstar987.jpg",
                domains: ["권한 제어", "동아리", "투표", "신청서"],
            },
        ] as Person[],
    },
    fe: {
        lead: {
            id: "fe1-2024-1",
            name: "강민규",
            github: "selfishAltruism",
            avatarUrl: "/avatar/selfishAltruism.jpg",
            domains: ["CI/CD", "로그인", "동아리", "홈", "사물함"],
        } as Person,
        members: [
            {
                id: "fe2-2024-1",
                name: "박규한",
                github: "rbgksqkr",
                domains: ["회원가입", "게시글/게시판", "댓글/대댓글"],
            },
        ] as Person[],
    },
};
