'use client'
import axios from 'axios'
import { set } from 'date-fns'
import { ChartNoAxesColumnIncreasingIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

//Here we take all courses from database and list them
 export type Course = {
    id:number,
    courseId:number,
    title:string,
    desc:string,
    level:string,
    bannerImage:string,
    tag:string,
    chapters?:Chapter[],
    userEnrolled?:boolean,
    courseEnrolledInfo?:courseEnrolledInfo,
    completeExercises?:CompleteExercises[]
}
export type courseEnrolledInfo={
    xpEarned:number,
    enrolledDate:any,
}

export type Chapter = {
  chapterId:number,
  courseId:number,
  desc:string,
  name:string,
  id:number,
  exercises:exercise[]
}

export type exercise = {
  name:string,
  slug:string,
  xp:number,
  difficulty:string
}

export type CompleteExercises = {  //It will track the user for which excrcise is completed
     courseId:number,
     chapterId:number,
     exerciseId:number,
}

const ListCourses = () => {
    const [coursesList, setCoursesList] = useState<Course[]>([])
    const [loading, setLoading] = useState<boolean>(false)  

    useEffect(()=> {
        GetAllCourses();
    },[])

    const GetAllCourses = async() =>{
        setLoading(true);
        const result = await axios.get('/api/course') //take course list from database
        console.log(result)
        setCoursesList(result.data)
        setLoading(false);
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-3'>
      {coursesList?.map((course, idx) => (
        <Link href={'/courses/'+course?.courseId} key={idx}>
        <div key={idx} className='border-2 border-zinc-800 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-200 ease-in-out cursor-pointer'>
            <Image src={(course.bannerImage ).trimEnd() } alt={course.title} width={400} height={400} unoptimized className='w-full h-[200px] object-cover'/>
            <div className='p-4'>
                <h2 className='font-2xl font-game'>{course?.title}</h2>
                <p className='font-xl font-game text-gray-400 line-clamp-2'>{course?.desc}</p>

                <h2 className='bg-zinc-800 inline-flex gap-2 font-game p-1 mt-3 px-4 rounded-2xl items-center'>
                    <ChartNoAxesColumnIncreasingIcon className='h-3'/>
                    {course?.level}
                </h2>
            </div>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default ListCourses
