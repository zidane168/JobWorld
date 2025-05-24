import { icon } from "@/types/jobs";
import Image from "next/image";

export function LanguageIcon() {
    return (
        <Image src={ icon.language } width={ 30 } height={ 30 } alt="Language" />
    )
}