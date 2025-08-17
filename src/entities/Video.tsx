"use client";

import { useEffect, useRef } from "react";

type Props = {
    src?: string;
    playbackRate?: number;
};

export default function ForwardLoopVideo({
    src = "causw_features/response_design.mp4",
    playbackRate = 1.8,
}: Props) {
    const ref = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const v = ref.current;
        if (!v) return;

        const onLoaded = () => {
            v.playbackRate = playbackRate;
            const p = v.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
        };

        const onRateChange = () => {
            if (Math.abs(v.playbackRate - playbackRate) > 1e-3) {
                v.playbackRate = playbackRate;
            }
        };

        v.addEventListener("loadedmetadata", onLoaded);
        v.addEventListener("ratechange", onRateChange);

        const onVis = () => {
            if (document.hidden) v.pause();
            else {
                v.playbackRate = playbackRate;
                const p = v.play();
                if (p && typeof p.catch === "function") p.catch(() => {});
            }
        };
        document.addEventListener("visibilitychange", onVis);

        return () => {
            v.removeEventListener("loadedmetadata", onLoaded);
            v.removeEventListener("ratechange", onRateChange);
            document.removeEventListener("visibilitychange", onVis);
        };
    }, [playbackRate]);

    return (
        <video
            ref={ref}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            controls={false}
            src={src}
            style={{
                display: "block",
                border: "none",
                outline: "none",
                background: "transparent",
            }}
        />
    );
}
