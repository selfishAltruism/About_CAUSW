import { Construction } from "lucide-react";

export const UnderConstructionBlock = () => {
    return (
        <div className="left-1/2 top-1/2 flex text-[#acacac]">
            <Construction />
            <Construction className="mr-2" />
            Under Construction...
            <Construction className="ml-2" />
            <Construction />
        </div>
    );
};
