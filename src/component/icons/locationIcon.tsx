import { icon } from "@/types/jobs";
import Image from "next/image";

export function LocationIcon() {
    return (
        <Image src={ icon.location } width={ 30 } height={ 30 } alt="Location" />
    )
}