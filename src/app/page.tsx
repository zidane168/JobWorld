import { AllSummary } from "@/component/AllSummary";
import Image from "next/image";

export default function Home() {
  

  return ( 
    <>
      <div className='container mx-auto w-full flex justify-center'>
        <Image src="/images/background.jpg" alt="background" layout="responsive"   width={600} height={200} />
      </div>

      <div className='container  mx-auto  mt-[10px] mb-[20px]'>
        {/* <div className='flex gap-4 mb-[40px] mt-[20px]'>
          <input value="Skills" className='border rounded-md p-2 w-full'/>
          <input value="Location" className='border rounded-md p-2 w-full'/>
          <button type="submit" className="p-2 bg-purple-500 text-white uppercase rounded-md font-bold"> Search </button>
        </div> */}

        <div className="grid grid-cols-2 gap-4">
          <AllSummary />
        </div>
      </div>
    </> 
  );
}
