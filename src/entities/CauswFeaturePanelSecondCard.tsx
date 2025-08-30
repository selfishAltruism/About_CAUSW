import Image from "next/image";
import { useState } from "react";

export const CauswFeaturePanelSecondCard = () => {
    const [firstCardIndex, setFirstCardIndex] = useState(0);

    return (
        <div className="flex h-4/5 w-full flex-col xl:flex-row">
            <div className="flex flex-1 flex-col justify-between gap-5">
                <span>
                    직군/직업 기반 정보 공유를 통해서, <br />
                    선배에게 도움을 요청할 수 있도록.
                    <br />
                    <strong>
                        중앙대학교 소프트웨어학부의 황금 수첩,{" "}
                        <span className="text-sub">동문 수첩</span>
                    </strong>
                </span>

                <Image
                    src="/causw_features/second_card_1.png"
                    width={600}
                    height={600}
                    alt="second_card_1"
                />
            </div>

            <div className="flex flex-1 flex-col"></div>
        </div>
    );
};
