import { icon } from "@/types/jobs";
import Image from "next/image";

export function DomainIcon() {
    return (
        <Image src={ icon.domain } width={ 30 } height={ 30 } alt="Domain" />
    )
}