import { Construction } from "lucide-react";

export const UnderConstructionBlock = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div
            className={
                "left-1/2 top-1/2 flex items-end text-gray-500 max-lg:text-xs " +
                className
            }
        >
            <Construction />
            <Construction className="mr-2" />
            Under Construction...
            <Construction className="ml-2" />
            <Construction />
        </div>
    );
};
