"use client";

export const CauswPanelHandle = () => (
    <button
        className="absolute bottom-[10px] left-1/4 h-2 w-1/2 rounded-full bg-white/40"
        onClick={() => {
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: "smooth",
            });
        }}
    />
);
