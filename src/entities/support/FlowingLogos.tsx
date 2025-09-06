"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Logo = { src: string; alt: string; w: number; h: number };

const LOGOS: Logo[] = [
    { src: "/support/cau.svg", alt: "cau", w: 195, h: 195 },
    { src: "/support/sw.png", alt: "sw", w: 200, h: 200 },
    { src: "/support/council.png", alt: "council", w: 210, h: 210 },
    { src: "/support/cau.svg", alt: "cau", w: 195, h: 195 },
    { src: "/support/sw.png", alt: "sw", w: 200, h: 200 },
    { src: "/support/council.png", alt: "council", w: 210, h: 210 },
    { src: "/support/cau.svg", alt: "cau", w: 195, h: 195 },
    { src: "/support/sw.png", alt: "sw", w: 200, h: 200 },
    { src: "/support/council.png", alt: "council", w: 210, h: 210 },
];

function MarqueeRow({
    logos,
    gapPx = 40, // gap-10과 동일
    speedPxPerSec = 120, // 속도
    scale = 1, // 이미지 스케일(모바일 0.5 등)
    containerClass = "", // 위치/가시성 제어 클래스
}: {
    logos: Logo[];
    gapPx?: number;
    speedPxPerSec?: number;
    scale?: number;
    containerClass?: string;
}) {
    const groupRef = useRef<HTMLDivElement | null>(null);
    const [groupWidth, setGroupWidth] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (!groupRef.current) return;
            const rect = groupRef.current.getBoundingClientRect();
            setGroupWidth(rect.width);
        };
        // 최초 측정
        measure();

        // 관찰자/리사이즈
        const ro = new ResizeObserver(measure);
        if (groupRef.current) ro.observe(groupRef.current);
        window.addEventListener("resize", measure);
        const t = setTimeout(measure, 50);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
            clearTimeout(t);
        };
    }, []);

    const distancePx = groupWidth + gapPx;
    const durationSec = useMemo(() => {
        if (distancePx <= 0) return 20;
        return Math.max(8, distancePx / speedPxPerSec);
    }, [distancePx, speedPxPerSec]);

    return (
        <div className={`w-screen overflow-hidden bg-white ${containerClass}`}>
            <div
                className="marquee-track flex whitespace-nowrap"
                style={
                    {
                        ["--g" as any]: `${gapPx}px`,
                        ["--d" as any]: `${distancePx}px`,
                        animationDuration: `${durationSec}s`,
                    } as React.CSSProperties
                }
            >
                <div
                    ref={groupRef}
                    className="inline-flex flex-none items-center gap-[var(--g)]"
                >
                    {logos.map((logo, idx) => (
                        <Image
                            key={`a-${idx}`}
                            src={logo.src}
                            alt={logo.alt}
                            width={Math.round(logo.w * scale)}
                            height={Math.round(logo.h * scale)}
                            className="block select-none"
                            draggable={false}
                            priority={idx === 0}
                        />
                    ))}
                </div>

                <div
                    className="flex-none"
                    style={{ width: "var(--g)" }}
                    aria-hidden="true"
                />

                <div
                    className="inline-flex flex-none items-center gap-[var(--g)]"
                    aria-hidden="true"
                >
                    {logos.map((logo, idx) => (
                        <Image
                            key={`b-${idx}`}
                            src={logo.src}
                            alt=""
                            width={Math.round(logo.w * scale)}
                            height={Math.round(logo.h * scale)}
                            className="block select-none"
                            draggable={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const FlowingLogos = () => {
    return (
        <>
            <MarqueeRow
                logos={LOGOS}
                gapPx={40}
                speedPxPerSec={120}
                scale={1}
                containerClass="absolute top-16 max-lg:hidden"
            />
            <MarqueeRow
                logos={LOGOS}
                gapPx={40}
                speedPxPerSec={120}
                scale={1}
                containerClass="absolute bottom-16 max-lg:hidden"
            />

            <MarqueeRow
                logos={LOGOS}
                gapPx={24} // 모바일 간격 약간 축소 예시
                speedPxPerSec={100} // 모바일 속도 약간 완화
                scale={0.5}
                containerClass="absolute top-24 lg:hidden"
            />
            <MarqueeRow
                logos={LOGOS}
                gapPx={24}
                speedPxPerSec={100}
                scale={0.5}
                containerClass="absolute bottom-24 lg:hidden"
            />
        </>
    );
};
