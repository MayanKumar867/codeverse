//Course detail page
'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseDetailBanner from './_components/CourseDetailBanner';
import axios from 'axios';
import { Course } from '../_components/ListCourses';
import { set } from 'date-fns';
import CourseChapters from './_components/CourseChapters';
import CourseStatus from './_components/CourseStatus';
import UpgradeToPro from '../../dashboard/_components/UpgradeToPro';
import Help from './_components/Help';

type courseDetail = { //Exersise details type

}
const CourseDetail = () => {
  const { courseId } = useParams();
  const [courseDetail, setCourseDetail] = useState<Course>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    courseId && GetCourseDetail();
  }, [courseId])

  const GetCourseDetail = async () => {
    setLoading(true);
    const result = await axios.get('/api/course?courseid=' + courseId);
    console.log(result.data);
    setCourseDetail(result?.data);
    setLoading(false);
  }
  return (
    <div>
      <CourseDetailBanner loading={loading} courseDetail={courseDetail} refreshData={()=>GetCourseDetail()}/>

      <div className='grid grid-cols-3 p-10 md:px-24 lg:px-36 gap-7'>
        <div className='col-span-2'>
          <CourseChapters loading={loading} courseDetail={courseDetail}/>
        </div>

        <div>
          <CourseStatus courseDetail={courseDetail}/>
          <UpgradeToPro/>
          <Help/>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
