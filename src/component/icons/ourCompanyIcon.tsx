import { icon } from "@/types/jobs";
import Image from "next/image";

export function OurCompanyIcon() {
    return (
        <Image src={ icon.ourCompany } width={ 30 } height={ 30 } alt="Our Company" />
    )
}