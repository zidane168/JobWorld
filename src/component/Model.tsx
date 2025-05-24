import React, { MouseEventHandler } from 'react';
import "@/app/Modal.css"
import { CloseIcon } from './icons/closeIcon';
import { IJob } from '@/types/jobs';
import { DomainIcon } from './icons/domainIcon';
import { WorkingTimeIcon } from './icons/workingTime';
import { ProcessInterviewIcon } from './icons/processInterviewIcon';
import { SalaryIcon } from './icons/salaryIcon';
import Link from 'next/link';
import { LocationIcon } from './icons/locationIcon';
import { JobDescriptionIcon } from './icons/jobDescriptionIcon';
import { OurCompanyIcon } from './icons/ourCompanyIcon';
import { BenefitIcon } from './icons/benefitIcon';
import { LanguageIcon } from './icons/languageIcon';

const Modal = ({ job, isOpen, onClose } : { job: IJob, isOpen: boolean, onClose: MouseEventHandler<HTMLButtonElement>}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay flex flex-col overflow-y-scroll">  
        <div className="modal-content">
            <div className="flex justify-between items-center">
                <h2 className='bg-amber-400 p-2'> { job.title } </h2>
                <div>  
                    <button  className='hover:scale-1.1' onClick={onClose}> <CloseIcon />   </button>  
                </div>
            </div>
            <div className='mx-auto w-[1024px] text-justify'>
                <div>
                    <div className='font-bold text-red-700 flex gap-2 items-center'> 
                        <SalaryIcon />
                        <div className='underline'> Salary: </div>
                        { job.salary } 
                    </div>
                    <div className='mt-[5px] flex gap-2 mb-2 '>
                        <LocationIcon />
                        <div className='underline font-bold'> Location: </div>
                        { job.location.map( (loc, index) => {
                            return   <div key={ index } className='text-[14px] font-bold rounded-md bg-amber-200 px-2  text-center'> { loc } </div>
                        })} 
                    </div> 
                    <div>
                        <div className='flex gap-2 items-center'>
                            <OurCompanyIcon />
                            <div className='underline font-bold'> Our Company: </div>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.aboutOurCompany.map( (item, index) => {
                                return (<li key={ index } > { item}  </li>)
                            } ) }
                        </ul>
                    </div>

                    <div>
                        <div className='flex gap-2 items-center'>
                            <JobDescriptionIcon />
                            <span className='underline font-bold'> Job Description: </span>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.jobDescription.map( (item, index) => {
                                return (<li key={ index } > { item}  </li>)
                            } ) }
                        </ul>
                    </div>

                    
                    <div>
                        <div className='flex gap-2 items-center'>
                            <JobDescriptionIcon />
                            <span className='underline font-bold'> Job Description: </span>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.jobDescription.map( (item, index) => {
                                return (<li key={ index } > { item}  </li>)
                            } ) }
                        </ul>
                    </div>

                    <div>
                        <div className='flex gap-2 items-center'>
                            <BenefitIcon />
                            <span className='underline font-bold'> Benefit: </span>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.benefit.map( (item, index) => {
                                return (<li key={ index } > { item }  </li>)
                            } ) }
                        </ul>
                    </div>

                    <div>
                        <div className='flex gap-2 items-center'>
                            <LanguageIcon />
                            <span className='underline font-bold'> Language: </span>
                        </div>
                        <ul className='list-disc px-4'>
                            { job.language.map( (item, index) => {
                                return (<li key={ index } > { item }  </li>)
                            } ) }
                        </ul>
                    </div>
        
                    <div>
                        <span className="font-bold flex gap-2 items-center">   <DomainIcon /> <span className="underline"> Domain: </span> </span> 
                        <ul className="px-6 list-disc">
                        {
                            job.domain.map( (domain, index) => {
                                return <li key={ index }> {domain} </li>
                            })
                        }
                        </ul>
                    </div>
        
                    { job.workingTime && (
                        <div className="gap-2 flex">
                            <WorkingTimeIcon />
                            <span className="underline font-bold"> Working time: </span> { job.workingTime } 
                        </div>
                    ) }
                     
                    <div>
                        <div className="flex gap-2">
                            <ProcessInterviewIcon />
                            <span className="underline font-bold">Interview Process : </span>
                        </div>
                        <ul className="px-6 list-disc">
                        {
                            job.interviewProcess.map( (interview, index) => {
                                return <li key={ index }> Rounded {++index}: {interview} </li>
                            })
                        }
                        </ul> 
                    </div>

                    <Link href="https://forms.gle/Lf2x4neTnWScBL9LA" target='_blank' >
                        <button className='bg-pink-600 hover:bg-pink-400 hover:cursor-pointer font-bold text-white px-2 w-full rounded-md' >
                            Apply Now                        
                        </button>
                    </Link>         
                </div>
            </div>
        </div> 
    </div>
  );
};

export default Modal;