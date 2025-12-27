'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import 'react-splitter-layout/lib/index.css';
import { CompleteExercises, exercise } from '../../../_components/ListCourses';
import ContentSection from './_components/ContentSection';
import dynamic from 'next/dynamic';
import CodeEditor from './_components/CodeEditor';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
const SplitterLayout = dynamic(
  () => import('react-splitter-layout'),
  { ssr: false }
);




export type CourseExercise = {
  chapterId: number,
  courseId: number,
  desc: string,
  name: string,
  editorType: string,
  exercise: exercise[],
  exerciseData: ExcerciseData,
  completedExercise: CompleteExercises[]
}
export type ExcerciseData = {
  chapterId: number,
  courseId: number,
  exerciseId: string,
  exerciseName: string,
  exercisesContent: ExerciseContent
}
export type ExerciseContent = {
  content: string,
  hint: string,
  hintXp: string,
  starterCode: any,
  task: string
}

const Playground = () => {

  const { courseId, chapterId, exerciseslug } = useParams();

  const [loading, setLoading] = useState(false)
  const [courseExerciseData, setCourseExerciseData] = useState<CourseExercise>()
  const [exerciseInfo, setExerciseInfo] = useState<exercise>();
  const [nextButtonRoute, setNextButtonRoute] = useState<string | undefined>();
  const [prevButtonRoute, setPrevButtonRoute] = useState<string | undefined>();

  console.log("courseId", courseId)
  console.log("chapterId", chapterId)
  console.log("exerciseId", exerciseslug)

  useEffect(() => {
    GetExerciseCourseDetail()
  }, [])


  const GetExerciseCourseDetail = async () => {
    setLoading(true)
    const result = await axios.post('/api/exercise', {
      courseId: courseId,
      chapterId: chapterId,
      exerciseId: exerciseslug
    })
    console.log("FULL API RESPONSE", result.data);
    console.log("exerciseData", result.data.exerciseData);

    console.log(result.data);
    const mappedData: CourseExercise = {
      chapterId: result.data.chapterId,
      courseId: result.data.courseId,
      desc: result.data.desc,
      name: result.data.name,
      editorType: result.data.editorType || 'default', // Ensure editorType is provided
      exercise: result.data.exercise,
      exerciseData: result.data.exercisesData,
      completedExercise: result.data.completedExercise || []
    };
    setCourseExerciseData(mappedData);
    setLoading(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = '';
    }
  }, [])

  useEffect(() => {
    courseExerciseData && GetExerciseDetail();
  }, [courseExerciseData])

  const GetExerciseDetail = () => {
    const exerciseInfo = courseExerciseData?.exercise?.find((item) => item.slug == exerciseslug)
    setExerciseInfo(exerciseInfo);
  }
  
  const GetPreviousNextButtonRoute = () => {
     //Current idx of exercise from that idx we will ger actual slug for the Next route or previous route
     const currentExerciseIndex = courseExerciseData?.exercise?.findIndex(item=>item.slug == exerciseslug)??0;
    //  if(!currentExerciseIndex) return null
     const NextExercise= courseExerciseData?.exercise[currentExerciseIndex+1]?.slug;
     const PreviousExercise = courseExerciseData?.exercise[currentExerciseIndex - 1]?.slug;
    // console.log(NextExercise,PreviousExercise)

    setNextButtonRoute(NextExercise?'/courses/'+courseId+'/'+chapterId+'/'+NextExercise:undefined);
    setPrevButtonRoute(PreviousExercise?'/courses/'+courseId+'/'+chapterId+'/'+PreviousExercise:undefined);
  }

  return (
    <div className='border-t-4'>
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>
          <ContentSection courseExerciseData={courseExerciseData} loading={loading} />
        </div>

        <div>
          <CodeEditor courseExerciseData={courseExerciseData} loading={loading} />
        </div>

      </SplitterLayout>

      <div className='font-game fixed flex bg-zinc-900 bottom-0 w-full p-4 justify-between items-center'>
        <Link href={prevButtonRoute??'/courses/'+courseId}>
        <Button variant={'pixel'} className='text-xl'>Previous</Button>
        </Link>
        <div className='flex gap-3 items-center'>
          <Image src={'/star.png'} alt='star' width={40} height={40} />
          <h2 className='text-2xl'>
            You can earn {courseExerciseData?.exerciseData?.exercisesContent?.hintXp} XP
          </h2>

        </div>
        <Link href={nextButtonRoute??'/courses/'+courseId}>
          <Button variant={'pixel'} className='text-xl'>Next</Button>
        </Link>
      </div>
    </div>
  )
}

export default Playground



