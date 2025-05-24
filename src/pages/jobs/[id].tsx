// pages/jobs/[id].tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStore from '../../../store/job';
import { Detail } from '@/component/Detail';

const JobDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { jobs, page, loading, error, limit, fetchJobs }  = useStore()

  useEffect( () => {
    fetchJobs();
  }, [])
  
  const index = Number(id) - 1
  const job = jobs[ index ];

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Detail job={ job } /> 
    </div>
  );
};

export default JobDetail;