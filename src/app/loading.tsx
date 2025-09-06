import { Loader } from "lucide-react";

export default function Loading() {
    return (
        <p className="flex h-screen w-screen items-center justify-center text-gray-500 max-lg:text-xs">
            Loading...
            <Loader size={19} className="ml-2" />
        </p>
    );
}
