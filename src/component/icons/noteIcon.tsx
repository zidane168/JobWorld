import { icon } from "@/types/jobs";
import Image from "next/image";

export function NoteIcon() {
    return (
        <Image src={ icon.notes } width={ 30 } height={ 30 } alt="Notes" />
    )
}