import { icon } from "@/types/jobs";
import Image from "next/image";

export function LevelIcon() {
    return (
        <Image src={ icon.level } width={ 30 } height={ 30 } alt="Level" />
    )
}