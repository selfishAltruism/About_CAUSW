"use client";

import { useRef } from "react";

export const CauswPanelHandle = ({
    mode,
}: {
    mode: "MAIN" | "CAUSW_FEATURE_PANEL";
}) => {
    const isDragging = useRef(false);
    const startY = useRef(0);
    const lastY = useRef(0);

    const isCauswFeaturePanelMode = mode === "CAUSW_FEATURE_PANEL";

    const onPointerDown = (e: React.PointerEvent) => {
        if (isCauswFeaturePanelMode) return;

        isDragging.current = true;
        startY.current = e.clientY;
        lastY.current = e.clientY;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (isCauswFeaturePanelMode || !isDragging.current) return;

        const deltaY = e.clientY - lastY.current;
        lastY.current = e.clientY;

        window.scrollBy({
            top: deltaY * -1,
            left: 0,
            behavior: "auto",
        });
    };

    const onPointerUp = (e: React.PointerEvent) => {
        if (isCauswFeaturePanelMode) return;

        isDragging.current = false;
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    };

    return (
        <button
            className={
                (isCauswFeaturePanelMode
                    ? "top-[10px] bg-black/10 "
                    : "bottom-[10px] bg-white/40 ") +
                "absolute left-1/4 h-2 w-1/2 cursor-grab rounded-full active:cursor-grabbing"
            }
            onClick={() => {
                if (isCauswFeaturePanelMode) {
                    window.scrollBy({
                        top: -window.innerHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                } else
                    window.scrollBy({
                        top: window.innerHeight,
                        left: 0,
                        behavior: "smooth",
                    });
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
        />
    );
};
