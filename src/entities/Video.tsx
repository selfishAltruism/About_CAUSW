"use client";

import { useEffect, useRef } from "react";

type Props = {
    src?: string;
    playbackRate?: number;
};

export default function Video({
    src = "causw_features/response_design_1.mp4",
    playbackRate = 1,
}: Props) {
    const ref = useRef<HTMLVideoElement | null>(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        const v = ref.current;
        if (!v) return;

        if (initializedRef.current) {
            v.onloadedmetadata = null;
            v.onplay = null;
            v.onplaying = null;
            v.onseeking = null;
            v.onratechange = null;
            document.onvisibilitychange = null;
        }
        initializedRef.current = true;

        const applyRate = () => {
            if (Math.abs(v.defaultPlaybackRate - playbackRate) > 1e-3) {
                v.defaultPlaybackRate = playbackRate;
            }
            if (Math.abs(v.playbackRate - playbackRate) > 1e-3) {
                v.playbackRate = playbackRate;
            }
        };

        const safePlay = () => {
            applyRate();
            const p = v.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
        };

        const onLoaded = () => safePlay();
        const onPlayLike = () => applyRate();
        const onSeeking = () => applyRate();
        const onRateChange = () => {
            if (Math.abs(v.playbackRate - playbackRate) > 1e-3) {
                v.playbackRate = playbackRate;
            }
        };
        const onVis = () => {
            if (document.hidden) v.pause();
            else safePlay();
        };

        v.onloadedmetadata = onLoaded;
        v.onplay = onPlayLike;
        v.onplaying = onPlayLike;
        v.onseeking = onSeeking;
        v.onratechange = onRateChange;
        document.onvisibilitychange = onVis;

        applyRate();

        return () => {
            if (v) {
                v.onloadedmetadata = null;
                v.onplay = null;
                v.onplaying = null;
                v.onseeking = null;
                v.onratechange = null;
            }
            document.onvisibilitychange = null;
        };
    }, [playbackRate, src]);

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
