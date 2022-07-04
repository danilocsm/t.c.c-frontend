import { CircleNotch } from "phosphor-react";

function LoadingIcon() {
    return (
        <div className="flex items-center justify-center overflow-hidden w-fit h-fit">
            <CircleNotch weight="bold" className="animate-spin w-[40px] h-[40px]" />
        </div>
    )
}

export default LoadingIcon;