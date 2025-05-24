import { icon } from "@/types/jobs";
import Image from "next/image";

export function WorkingTimeIcon() {
    return (
        <Image src={ icon.workingTime } width={ 30 } height={ 30 } alt="Working Time" />
    )
}