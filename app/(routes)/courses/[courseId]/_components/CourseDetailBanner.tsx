//Course detail page header /courses/1
import React, { useState } from 'react'
import { Course } from '../../_components/ListCourses'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Loader2Icon } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
  loading: boolean,
  courseDetail: Course | undefined,
  refreshData: ()=> void
}

const CourseDetailBanner = ({ loading, courseDetail, refreshData }: Props) => {
  
  const [loading_ , setLoading_] = useState(false);
  const EnrollCourse= async()=>{
     setLoading_(true);
     const result=await axios.post('/api/enroll-course' , {
      courseId:courseDetail?.courseId
     })
     console.log(result);
     toast.success('Course Enrolled Successfully!')
     refreshData();
     setLoading_(false)
  }
  return (
    <div>
      <div className='relative'>
        {!courseDetail ?
          <Skeleton className='w-full h-[350px] rounded-2xl' /> :
          <Image src={courseDetail?.bannerImage?.trimEnd()} alt={courseDetail?.title} width={1400} height={300} className='w-full h-[300px] object-cover' />
        }
      </div>
      <div className='font-game absolute top-0 mt-20 ml-10 space-y-4 p-10 md:px-24 lg:px-36 '>
        <h2 className='text-6xl text-gray-900'>{courseDetail?.title}</h2>
        <p className='text-3xl text-gray-900 mt-3'>{courseDetail?.desc}</p>
        {!courseDetail?.userEnrolled?
        <Button className=' text-2xl mt-7' variant={'pixelNeon'} size={'lg'} onClick={EnrollCourse} disabled={loading_}>
          {loading_&&<Loader2Icon className='animate-spin'/>}
          Enroll Now</Button>:
          <Button className='text-2xl mt-7' variant={'pixel'} size={"lg"}>Continue Learning...</Button>}
      </div>
    </div>

  )
}

export default CourseDetailBanner
