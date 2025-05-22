import { IJob } from "@/types/jobs"; 

export function Summary( { job } : { job : IJob}  ) {
    return (
        <div className="rounded-md p-2  shadow-lg " >
            <div className='flex flex-row justify-between'>
                <div className='uppercase font-bold'> { job.title } </div>
                <div className='font-bold text-red-700'> { job.salary } </div>
            </div>
            
            <div className='mt-[5px] flex gap-4 '>
                { job.location.map( (loc, index) => {
                    return   <div className='rounded-md bg-amber-200 p-2 w-[100px] text-center'> { loc } </div>
                })} 
            </div> 

            <div>
                Skills: { job.domain }
            </div>

            <div>
                Working time: { job.workingTime } 
            </div>

            <div>
                Interview Process : { job.interviewProcess }
            </div>
  
            <div>
                { job.postDate } 
            </div>

            <div className="w-full text-center uppercase p-4 text-white bg-pink-600 rounded-md shadow-2xl hover:cursor-pointer hover:bg-pink-400"> 
                <a href="#">
                    Apply now
                </a>
            </div>

        </div>
    )
}