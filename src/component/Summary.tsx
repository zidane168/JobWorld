import { IJob } from "@/types/jobs"; 

export function Summary( { job } : { job : IJob}  ) {
    return (
        <div className="p-2 rounded-md shadow-lg " >
            <div className='flex flex-row justify-between'>
                <div className='font-bold uppercase'> [{ job.id }]  { job.title } </div>
                <div className='font-bold text-red-700'> { job.salary } </div>
            </div>
            
            <div className='mt-[5px] flex gap-4 '>
                { job.location.map( (loc, index) => {
                    return   <div key={ index } className='rounded-md bg-amber-200 p-2 w-[200px] text-center'> { loc } </div>
                })} 
            </div> 

            <div>
                Domain: 
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
                    Working time: { job.workingTime } 
                </div>
            ) }
           

            <div>
                Interview Process : 
                <ul className="px-6 list-disc">
                {
                    job.interviewProcess.map( (interview, index) => {
                        return <li key={ index }> Rounded {++index}: {interview} </li>
                    })
                }
                </ul> 
            </div>
  
            <div>
                { job.postDate } 
            </div>

            <div className="w-full p-4 text-center text-white uppercase bg-pink-600 rounded-md shadow-2xl hover:cursor-pointer hover:bg-pink-400"> 
                <a href="#">
                    Apply now
                </a>
            </div>

        </div>
    )
}