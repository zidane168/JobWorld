import { IJob } from "@/types/jobs"
import { Summary } from "./Summary"

export function AllSummary( { items = [] } : { items: IJob[]}  ) {
    return (
        <div className="rounded-md p-2  shadow-lg " >
            {
                items.map( (item : IJob, index) => {
                    return <Summary job={ item }/>
                })
            }
        </div>
    )
}