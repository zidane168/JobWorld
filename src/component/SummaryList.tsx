

import { IJob } from "@/types/jobs"
import { Summary } from "./Summary" 

export function SummaryList( { jobs } : { jobs : IJob[] }  ) {
  
    // const loadMore = () => { 
    //     if (searchItem) {
    //         fetchJobs(jobs.length / limit, searchItem);     // Calculate the current page 

    //     } else {
    //         fetchJobs(jobs.length / limit, null); 
    //     }
    // }; 
 
    return (
        <div className="grid grid-cols-2 gap-6 border">  
            {   
                jobs.map( (item : IJob, index : number) => {
                    return  (<div className="p-2 rounded-md " > <Summary key={ item.id } job={ item }/> </div> )
                })
            } 
        </div>
    )
}