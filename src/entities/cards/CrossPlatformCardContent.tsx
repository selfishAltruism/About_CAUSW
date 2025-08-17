import Video from "@/shared/ui/Video";

export const CrossPlatformCardContent = () => {
    return (
        <div className="grid grid-cols-[2fr_1fr_2fr] grid-rows-[3fr_2fr] p-5">
            <div className="col-span-1 row-span-1">
                <span className="">다양한 넓이를 지원하는 반응형 디자인</span>
            </div>
            <div className="col-span-2 row-span-1">
                <Video />
            </div>
            <div className="col-span-2 row-span-1"></div>
            <div className="col-span-1 row-span-1"></div>
        </div>
    );
};
