import { IJob } from "@/types/jobs"; 
import { TitleIcon } from "./icons/titleIcon";
import { DomainIcon } from "./icons/domainIcon";

export function Summary( { job } : { job : IJob}  ) {
    return (
        <div className="p-2 rounded-md shadow-lg leading-[30px]" >
            <div className='flex flex-row justify-between'>
                <div className='font-bold uppercase flex gap-2 items-center'> 
                    <TitleIcon />
                    [{ job.id }]  { job.title } 
                </div>
                <div className='font-bold text-red-700'> { job.salary } </div>
            </div>
            
            <div className='mt-[5px] flex gap-4 mb-2 '>
                { job.location.map( (loc, index) => {
                    return   <div key={ index } className='text-[14px] font-bold rounded-md bg-amber-200 px-2  text-center'> { loc } </div>
                })} 
            </div> 

            <div>
                <span className="underline font-bold flex gap-2 items-center">   <DomainIcon /> Domain: </span> 
                <ul className="px-6 list-disc">
                {
                    job.domain.map( (domain, index) => {
                        return <li key={ index }> {domain} </li>
                    })
                }
                </ul>
            </div>

            { job.workingTime && (
                <div>
                    <span className="underline font-bold"> Working time: </span> { job.workingTime } 
                </div>
            ) }
           
            <div className="flex justify-between">
                <div>
                    <span className="underline font-bold">Interview Process : </span>
                    <ul className="px-6 list-disc">
                    {
                        job.interviewProcess.map( (interview, index) => {
                            return <li key={ index }> Rounded {++index}: {interview} </li>
                        })
                    }
                    </ul> 
                </div>
    
                <div className="font-bold">
                    [ { job.postDate } ]
                </div>
            </div>

            <div className="flex gap-2">
                <div className="w-full px-2 text-center font-bold text-white uppercase bg-pink-600 rounded-md shadow-2xl hover:cursor-pointer hover:bg-pink-400"> 
                    <a href="#">
                        View detail && Apply
                    </a>
                </div>
                <div className="w-full px-2 text-center font-bold text-white uppercase bg-purple-600 rounded-md shadow-2xl hover:cursor-pointer hover:bg-purple-400"> 
                    <a href="#">
                        Share Job
                    </a>
                </div>
            </div>

        </div>
    )
}