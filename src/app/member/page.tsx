import React from "react";
import TeamOrgFullScreen, { Person } from "@/shared/ui/TeamOrgFullScreen";

export default function TeamOrgPage() {
    const pm: Person = {
        id: "pm1",
        name: "김PM",
        github: "kim-pm",
        domains: ["로드맵", "우선순위", "성과지표"],
    };

    const feLead: Person = {
        id: "feL",
        name: "박프론트",
        github: "@front-lead",
        domains: ["FE 아키텍처", "디자인 시스템"],
    };

    const feMembers: Person[] = [
        {
            id: "fe1",
            name: "홍길동",
            github: "hong-frontend",
            domains: ["대시보드", "컴포넌트"],
        },
        {
            id: "fe2",
            name: "이몽룡",
            github: "lee-fe",
            domains: ["리포트", "도면 뷰어"],
        },
    ];

    const beLead: Person = {
        id: "beL",
        name: "최백엔드",
        github: "back-lead",
        domains: ["API 게이트웨이", "DB 스키마"],
    };

    const beMembers: Person[] = [
        {
            id: "be1",
            name: "성춘향",
            github: "seong-be",
            domains: ["인증", "통계 API"],
        },
        {
            id: "be2",
            name: "임꺽정",
            github: "lim-be",
            domains: ["이벤트 처리", "파일 업로드"],
        },
    ];

    const pdMembers: Person[] = [
        {
            id: "pd1",
            name: "성춘향",
            github: "seong-be",
            domains: ["인증", "통계 API"],
        },
        {
            id: "pd2",
            name: "임꺽정",
            github: "lim-be",
            domains: ["이벤트 처리", "파일 업로드"],
        },
    ];

    return (
        <TeamOrgFullScreen
            pm={pm}
            feLead={feLead}
            feMembers={feMembers}
            beLead={beLead}
            beMembers={beMembers}
            pdMembers={pdMembers}
            planningTitle="Planning / Design"
        />
    );
}
