"use client";

import React, {
    useLayoutEffect,
    useRef,
    useState,
    useEffect,
    useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants as MotionVariants } from "framer-motion";

import { Badge } from "@/shared/shadcn/components/ui/badge";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/shared/shadcn/components/ui/avatar";

/* ===================== 타입 ===================== */
export type Person = {
    id: string;
    name: string;
    github?: string; // @ 포함/미포함 허용
    avatarUrl?: string;
    domains?: string[]; // 담당 도메인
};

export type TeamOrgFullScreenProps = {
    pm: Person;
    feLead: Person;
    feMembers: Person[];
    beLead: Person;
    beMembers: Person[];
    pdMembers: Person[];
};

/* ===================== 애니메이션 ===================== */
const containerV = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};
const SPRING = { type: "spring", stiffness: 320, damping: 26 } as const;

const popV: MotionVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 6 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { opacity: SPRING, scale: SPRING, y: SPRING },
    },
};

const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];
const pathV = (delay = 0): MotionVariants => ({
    hidden: { pathLength: 0, opacity: 0 },
    show: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 0.55, delay, ease: EASE_IN_OUT },
            opacity: { duration: 0.2, delay },
        },
    },
});

/* ===================== 메인 ===================== */
export default function TeamOrgFullScreen({
    pm,
    feLead,
    feMembers,
    beLead,
    beMembers,
    pdMembers,
}: TeamOrgFullScreenProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // 단일 아바타 refs
    const pmRef = useRef<HTMLDivElement>(null);
    const feLeadRef = useRef<HTMLDivElement>(null);
    const beLeadRef = useRef<HTMLDivElement>(null);

    // 다수 멤버 refs(맵 보관)
    const feMemberRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const beMemberRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const pdMemberRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // 연결선
    const [paths, setPaths] = useState<{ d: string; key: string }[]>([]);
    const [pdTop, setPdTop] = useState<number>(0);

    // 좌표 안정화용
    const rafId = useRef<number | null>(null);
    const lastMeasureRef = useRef<string>("");

    const [linesVisible, setLinesVisible] = useState(false);

    const handleAnimComplete = () => {
        // 애니메이션이 끝난 다음 프레임들에서 재측정
        scheduleMeasure(3);
        // 다음 틱에서 선을 켬
        setTimeout(() => setLinesVisible(true), 0);
    };

    // 원형 아바타 가장자리 보정 포함 앵커 계산
    const anchorPoint = useCallback(
        (
            el: HTMLElement,
            cont: DOMRect,
            side?: "left" | "right" | "top" | "bottom",
        ) => {
            const r = el.getBoundingClientRect();
            const radius = Math.min(r.width, r.height) / 2;
            const cx = r.left - cont.left + r.width / 2;
            const cy = r.top - cont.top + r.height / 2;
            if (!side) return { x: cx, y: cy };
            if (side === "left") return { x: cx + radius, y: cy };
            if (side === "right") return { x: cx - radius, y: cy };
            if (side === "top") return { x: cx, y: cy + radius };
            return { x: cx, y: cy - radius };
        },
        [],
    );

    const curve = (sx: number, sy: number, tx: number, ty: number) => {
        const dx = (tx - sx) * 0.35;
        const dy = (ty - sy) * 0.35;
        return `M ${sx},${sy} C ${sx + dx},${sy} ${tx - dx},${ty} ${tx},${ty}`;
    };

    // 선 계산 본체
    const updateLines = useCallback(() => {
        if (!containerRef.current || !pmRef.current) return;
        const cont = containerRef.current.getBoundingClientRect();
        const pmRect = pmRef.current.getBoundingClientRect();

        const nextPdTop = pmRect.bottom - cont.top + 200; // PD 위치 로직
        if (Math.abs(nextPdTop - pdTop) > 0.5) setPdTop(nextPdTop);

        const cFrom = anchorPoint(pmRef.current, cont);
        const next: { d: string; key: string }[] = [];

        // PM - FE/BE 리드, Planning
        if (feLeadRef.current) {
            const to = anchorPoint(feLeadRef.current, cont, "left");
            next.push({
                d: curve(cFrom.x, cFrom.y, to.x, to.y),
                key: "pm-feLead",
            });
        }
        if (beLeadRef.current) {
            const to = anchorPoint(beLeadRef.current, cont, "right");
            next.push({
                d: curve(cFrom.x, cFrom.y, to.x, to.y),
                key: "pm-beLead",
            });
        }

        // FE 리드 - 멤버
        if (feLeadRef.current) {
            const fFrom = anchorPoint(feLeadRef.current, cont);
            feMembers.forEach((m) => {
                const el = feMemberRefs.current[m.id];
                if (!el) return;
                const to = anchorPoint(el, cont);
                next.push({
                    d: curve(fFrom.x, fFrom.y, to.x, to.y),
                    key: `fe-${m.id}`,
                });
            });
        }

        // BE 리드 - 멤버
        if (beLeadRef.current) {
            const bFrom = anchorPoint(beLeadRef.current, cont);
            beMembers.forEach((m) => {
                const el = beMemberRefs.current[m.id];
                if (!el) return;
                const to = anchorPoint(el, cont);
                next.push({
                    d: curve(bFrom.x, bFrom.y, to.x, to.y),
                    key: `be-${m.id}`,
                });
            });
        }

        // BE 리드 - 멤버
        pdMembers.forEach((m) => {
            const el = pdMemberRefs.current[m.id];
            if (!el) return;
            const to = anchorPoint(el, cont);
            next.push({
                d: curve(cFrom.x, cFrom.y, to.x, to.y),
                key: `pd-${m.id}`,
            });
        });

        // 안정화
        const serialized = next.map((p) => p.d).join("|");
        if (serialized !== lastMeasureRef.current) {
            lastMeasureRef.current = serialized;
            setPaths(next);
        }
    }, [anchorPoint, feMembers, beMembers, pdTop]);

    // 지연 측정 스케줄러
    const scheduleMeasure = useCallback(
        (frames = 2) => {
            const tick = (left: number) => {
                rafId.current = requestAnimationFrame(() => {
                    updateLines();
                    if (left > 1) tick(left - 1);
                });
            };
            tick(frames);
        },
        [updateLines],
    );

    useEffect(() => {
        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    // 초기 및 이벤트 기반 재측정
    useLayoutEffect(() => {
        const ro = new ResizeObserver(() => scheduleMeasure(2));
        if (containerRef.current) ro.observe(containerRef.current);

        // 최초
        updateLines();
        scheduleMeasure(3);

        // 폰트 준비
        const fontReady = (document as any).fonts?.ready as
            | Promise<void>
            | undefined;
        fontReady?.then(() => scheduleMeasure(2));

        // window 로드/캐시 복원
        const onLoad = () => scheduleMeasure(2);
        const onPageShow = () => scheduleMeasure(2);
        window.addEventListener("load", onLoad);
        window.addEventListener("pageshow", onPageShow);

        // 리사이즈
        window.addEventListener("resize", onLoad);

        // 아바타 이미지 개별 로드 이벤트(하단에서 dispatch)
        const onAvatarLoaded = () => scheduleMeasure(2);
        window.addEventListener(
            "orgchart-avatar-loaded" as any,
            onAvatarLoaded,
        );

        return () => {
            ro.disconnect();
            window.removeEventListener("load", onLoad);
            window.removeEventListener("pageshow", onPageShow);
            window.removeEventListener("resize", onLoad);
            window.removeEventListener(
                "orgchart-avatar-loaded" as any,
                onAvatarLoaded,
            );
        };
    }, [scheduleMeasure, updateLines]);

    // 멤버 배열 변경 시 ref 맵 초기화
    useEffect(() => {
        feMemberRefs.current = {};
        beMemberRefs.current = {};
        pdMemberRefs.current = {};
    }, [feMembers, beMembers]);

    /* ===================== return ===================== */
    return (
        <div
            ref={containerRef}
            className="relative max-h-[950px] min-h-[950px] min-w-[1600px] max-w-[1600px] overflow-auto"
        >
            {/* 연결선 오버레이 */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full">
                <AnimatePresence>
                    {paths.map((p, idx) => (
                        <motion.path
                            key={p.key}
                            d={p.d}
                            fill="none"
                            stroke="currentColor"
                            className="text-muted-foreground/30"
                            strokeWidth={1}
                            variants={pathV(0.5 + idx * 0.04)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        />
                    ))}
                </AnimatePresence>
            </svg>

            {/* 레이아웃: PD는 절대 위치로 별도 렌더 */}
            <motion.div
                className="grid min-h-full grid-cols-[1fr_520px_1fr] grid-rows-[auto_1fr] items-start justify-center gap-16 px-10 py-14"
                variants={containerV}
                initial="hidden"
                animate="show"
                onAnimationComplete={handleAnimComplete}
            >
                {/* 좌측: fe */}
                <motion.div
                    className="relative w-full max-w-[520px] justify-self-end"
                    variants={popV}
                >
                    <div className="absolute -right-[90px] font-medium text-muted-foreground">
                        Front-end Team
                    </div>

                    <div className="flex items-start justify-end gap-6">
                        {/* 멤버(좌측): 5명 이상이면 2열 Grid로 전환 */}
                        <div
                            className={
                                feMembers.length >= 5
                                    ? "grid max-w-full grid-cols-2 gap-6"
                                    : "flex max-w-full flex-wrap items-start gap-6"
                            }
                        >
                            {feMembers.map((m) => (
                                <motion.div key={m.id} variants={popV}>
                                    <ProfileUnit
                                        person={m}
                                        size="member"
                                        avatarRef={(el) => {
                                            feMemberRefs.current[m.id] = el;
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* 팀장(우측) */}
                        <motion.div variants={popV}>
                            <ProfileUnit
                                person={feLead}
                                size="lead"
                                avatarRef={feLeadRef}
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* 중앙: PM */}
                <motion.div className="justify-self-center" variants={popV}>
                    <ProfileUnit person={pm} size="pm" avatarRef={pmRef} />
                </motion.div>

                {/* 우측: be */}
                <motion.div
                    className="relative w-full max-w-[520px] justify-self-start"
                    variants={popV}
                >
                    <div className="absolute -left-[113px] mb-2 font-medium text-muted-foreground">
                        Back-end Team
                    </div>

                    <div className="flex items-start justify-start gap-6">
                        <motion.div variants={popV}>
                            <ProfileUnit
                                person={beLead}
                                size="lead"
                                avatarRef={beLeadRef}
                            />
                        </motion.div>

                        {/* 멤버(우측): 5명 이상이면 2열 Grid로 전환 */}
                        <div
                            className={
                                beMembers.length >= 5
                                    ? "grid max-w-full grid-cols-2 gap-6"
                                    : "flex max-w-full flex-wrap items-start gap-6"
                            }
                        >
                            {beMembers.map((m) => (
                                <motion.div key={m.id} variants={popV}>
                                    <ProfileUnit
                                        person={m}
                                        size="member"
                                        avatarRef={(el) => {
                                            beMemberRefs.current[m.id] = el;
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* PD: 컨테이너 기준 절대 위치 */}
            <motion.div
                className="pointer-events-none absolute left-0 right-0"
                style={{ top: pdTop }}
                variants={popV}
                initial="hidden"
                animate="show"
            >
                <div className="pointer-events-auto">
                    <div className="mb-5 text-center font-medium text-muted-foreground">
                        Planning / Design Team
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        {pdMembers.map((m) => (
                            <motion.div key={m.id} variants={popV}>
                                <ProfileUnit
                                    person={m}
                                    size="member"
                                    avatarRef={(el) => {
                                        pdMemberRefs.current[m.id] = el;
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

/* ===================== UI: PM 형태로 통일 ===================== */

/** PM 스타일 유닛: 큰 아바타 - 이름 | @github - 도메인 뱃지 */
function ProfileUnit({
    person,
    size = "member",
    avatarRef,
}: {
    person: Person;
    size?: "pm" | "lead" | "member";
    avatarRef?: React.Ref<HTMLDivElement>;
}) {
    const gh = person.github?.replace(/^@/, "");
    const initials = gh
        ? gh.slice(0, 4).toUpperCase()
        : person.name.slice(0, 3).toUpperCase();

    const avatarClass =
        size === "pm"
            ? "h-24 w-24"
            : size === "lead"
              ? "h-20 w-20"
              : "h-16 w-16";

    const nameClass =
        size === "pm" ? "text-lg" : size === "lead" ? "text-base" : "text-sm";

    const domainText = size === "member" ? "text-[10px]" : "text-[11px]";

    return (
        <div className="flex flex-col items-center gap-2">
            <div ref={avatarRef} className="rounded-full ring-1 ring-gray-400">
                <Avatar className={avatarClass}>
                    {person.avatarUrl ? (
                        <AvatarImage src={person.avatarUrl} alt={person.name} />
                    ) : (
                        <AvatarFallback className="text-gray-400">
                            {initials}
                        </AvatarFallback>
                    )}
                </Avatar>
            </div>

            <div className="text-center">
                <div className={`font-semibold leading-tight ${nameClass}`}>
                    {person.name}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                    {gh ? (
                        <>
                            <a
                                href={`https://github.com/${gh}`}
                                target="_blank"
                                rel="noreferrer"
                                className="relative z-50 underline underline-offset-2 hover:opacity-80"
                                aria-label={`${person.name}의 GitHub 프로필로 이동`}
                            >
                                @{gh}
                            </a>
                        </>
                    ) : null}
                </div>
            </div>

            {person.domains?.length ? (
                <div
                    className={`flex flex-wrap justify-center gap-1 ${domainText}`}
                >
                    {person.domains.map((d, i) => (
                        <Badge
                            key={i}
                            variant="secondary"
                            className="bg-sub px-1.5 py-0 text-white hover:bg-sub"
                        >
                            {d}
                        </Badge>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
