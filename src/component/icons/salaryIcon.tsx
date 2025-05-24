import { icon } from "@/types/jobs";
import Image from "next/image";

export function SalaryIcon() {
    return (
        <Image src={ icon.salary } width={ 30 } height={ 30 } alt="Salary" />
    )
}