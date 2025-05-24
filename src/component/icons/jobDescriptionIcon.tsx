import { icon } from "@/types/jobs";
import Image from "next/image";

export function JobDescriptionIcon() {
    return (
        <Image src={ icon.jobDescription } width={ 30 } height={ 30 } alt="Job Code" />
    )
}