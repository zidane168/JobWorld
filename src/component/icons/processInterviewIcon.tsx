import { icon } from "@/types/jobs";
import Image from "next/image";

export function ProcessInterviewIcon() {
    return (
        <Image src={ icon.processInterview } width={ 30 } height={ 30 } alt="Process Interview" />
    )
}