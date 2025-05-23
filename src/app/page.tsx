'use client'

import { SummaryList } from "@/component/SummaryList";
import Image from "next/image";
import { useEffect } from "react"; 
import useStore from "../../store/job";

export default function Home() {
    const { jobs, page, loading, error, limit, fetchJobs }  = useStore()

    useEffect(() => {  
        fetchJobs( );  
    }, [] );


  return ( 
    <>
      <div className='container flex justify-center w-full mx-auto'>
        <Image src="/images/background.jpg" alt="background" layout="responsive"   width={600} height={200} />
      </div>

      <div className='container  mx-auto  mt-[10px] mb-[20px]'>
        
        {/* <div className='flex gap-4 mb-[40px] mt-[20px]'>
          <input value="Skills" className='w-full p-2 border rounded-md'/>
          <input value="Location" className='w-full p-2 border rounded-md'/>
          <button type="submit" className="p-2 font-bold text-white uppercase bg-purple-500 rounded-md"> Search </button>
        </div> */}

        <SummaryList jobs={ jobs } />
      
      </div>
    </> 
  );
}
