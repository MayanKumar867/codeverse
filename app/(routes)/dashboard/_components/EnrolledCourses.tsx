'use client'
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import CourseProgressCard from './CourseProgressCard';

export type EnrolledCoursesInfo = {
   bannerImage:string,
   courseId:number,
   completedExercises:number,
   level:string,
   title:string,
   totalExercises:number,
   xpEarned:number
}

const EnrolledCourses = () => {
    const [enrolledCourses, setEnrolledCourses] =useState<EnrolledCoursesInfo[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      GetUserEnrolledCourses();
    },[])

    const GetUserEnrolledCourses = async()=>{
      setLoading(true);
      const result = await axios.get('/api/course?courseid==enrolled');
      console.log(result.data)
      setEnrolledCourses(result.data)
      setLoading(false);
    }
  return (
    <div className='mt-8'>
        <h2 className='font-game text-3xl mb-2'>Your Enrolled Courses</h2>
        {loading&&<Skeleton className='w-full rounded-2xl my-5'/>}
      {enrolledCourses?.length == 0 ?
      <div className='flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-800'>
        <Image src={'/gamebook.png'} alt='gamebook' width={90} height={90}/>
         <h2 className='font-game text-xl'>You don't have any enrolled cources</h2>
         <Link href={'/courses'}>
         <Button variant={'pixel'} size={'lg'} className='font-game text-lg'>Browse Courses</Button>
         </Link>
      </div>:
      <div>
        {enrolledCourses?.map((course, idx) => (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5'>
            <CourseProgressCard course={course}/>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default EnrolledCourses
