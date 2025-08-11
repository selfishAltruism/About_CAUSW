import { Person } from "../ui/TeamOrgFullScreen";

export const TEAM_2025 = {
    pm: {
        id: "pm",
        name: "윤민규",
        github: "???",
        domains: ["PM"],
    } as Person,
    fe: {
        lead: {
            id: "fe1",
            name: "김영현",
            github: "???",
            domains: ["대시보드", "컴포넌트 개발", "성능 최적화"],
        } as Person,
        members: [
            {
                id: "fe2",
                name: "김선희",
                github: "???",
                domains: ["디자인 시스템", "반응형 UI", "접근성 개선"],
            },
            {
                id: "fe3",
                name: "라희수",
                github: "???",
                domains: ["차트 구현", "데이터 시각화", "상태 관리"],
            },
            {
                id: "fe4",
                name: "손유진",
                github: "???",
                domains: ["라우팅", "API 연동", "테스트 코드 작성"],
            },
            {
                id: "fe5",
                name: "이영재",
                github: "???",
                domains: ["파일 업로드", "이미지 처리", "UI 애니메이션"],
            },
        ] as Person[],
    },
    be: {
        lead: {
            id: "be1",
            name: "현재환",
            github: "???",
            domains: ["인증 시스템", "로그 관리", "보안 설정"],
        } as Person,
        members: [
            {
                id: "be2",
                name: "한성재",
                github: "???",
                domains: ["DB 설계", "쿼리 최적화", "데이터 마이그레이션"],
            },
            {
                id: "be3",
                name: "오기택",
                github: "???",
                domains: ["파일 저장소", "이벤트 처리", "메시지 큐"],
            },
            {
                id: "be4",
                name: "이가연",
                github: "???",
                domains: ["REST API", "문서화", "테스트 자동화"],
            },
            {
                id: "be5",
                name: "김민창",
                github: "???",
                domains: ["캐시 처리", "배치 작업", "서비스 모니터링"],
            },
            {
                id: "be6",
                name: "이해찬",
                github: "???",
                domains: ["알림 시스템", "푸시 서비스", "로그 분석"],
            },
            {
                id: "be7",
                name: "이우진",
                github: "???",
                domains: ["결제 시스템", "거래 로그", "보안 인증"],
            },
            {
                id: "be8",
                name: "한지강",
                github: "???",
                domains: ["API 게이트웨이", "트래픽 제어", "장애 대응"],
            },
        ] as Person[],
    },
    pd: {
        members: [
            {
                id: "pd1",
                name: "정보운",
                github: "???",
                domains: ["UI 기획", "사용자 분석", "워크플로우 설계"],
            },
            {
                id: "pd2",
                name: "이윤제",
                github: "???",
                domains: ["UX 디자인", "프로토타이핑", "브랜딩"],
            },
        ] as Person[],
    },
};
