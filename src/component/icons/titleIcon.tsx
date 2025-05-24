import { icon } from "@/types/jobs";
import Image from "next/image";

export function TitleIcon() {
    return (
        <Image src={ icon.title } width={ 30 } height={ 30 } alt="Job Title" />
    )
}