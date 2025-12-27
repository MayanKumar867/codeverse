import React from 'react'
import { Course } from '../../_components/ListCourses'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Skeleton } from '@/components/ui/skeleton'
import { index, IndexBuilder } from 'drizzle-orm/gel-core'
import { Button } from '@/components/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

type Props = {
  loading: boolean,
  courseDetail: Course | undefined
}
const CourseChapters = ({ loading, courseDetail }: Props) => {
  const { has } = useAuth();
  const hasUnlimitedAccess = has && has({ plan: 'unlimited' })

  // Controls exercise unlocking so users can only access the next exercise after completing the previous one
  const EnableExercise = (
    chapterIndex: number,
    exerciseIndex: number,
    chapterExercisesLength: number
  ) => {
    const completed = courseDetail?.completeExercises;

    // If nothing is completed, enable FIRST exercise ONLY
    if (!completed || completed.length === 0) {
      return chapterIndex === 0 && exerciseIndex === 0;
    }

    // Last completed exercise
    const last = completed[completed.length - 1];

    // Convert current exercise to global exercise number
    const currentExerciseNumber =
      chapterIndex * chapterExercisesLength + exerciseIndex + 1;

    const lastCompletedNumber =
      (last.chapterId - 1) * chapterExercisesLength + last.exerciseId;

    return currentExerciseNumber === lastCompletedNumber + 1;
  };

  const isExerciseCompleted = (chapterId: number, exerciseId: number) => {
    const completedChapters = courseDetail?.completeExercises;

    const completeChapter = completedChapters?.find(item => (item.chapterId == chapterId && item.exerciseId == exerciseId))
    return completeChapter ? true : false
  }


  return (
    <div>
      {
        courseDetail?.chapters?.length == 0 ?
          <div>
            <Skeleton className='w-full h-[100px] mt-5 rounded-2xl' />
            <Skeleton className='w-full h-[100px] mt-5 rounded-2xl' />
          </div> :

          <div className='p-5 rounded-2xl'>
            {courseDetail?.chapters?.map((chapter, idx) => (
              <Accordion type="single" collapsible key={idx}>
                <AccordionItem value="item-1">
                  <AccordionTrigger className='p-3 hover:bg-zinc-700 font-game text-2xl'>
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex gap-10'>
                        <h2 className='h-12 w-12 bg-zinc-700 rounded-full flex items-center justify-center'>{idx + 1}</h2>
                        {chapter?.name}
                      </div>
                     {!hasUnlimitedAccess && idx>=2 && <h2 className='text-cyan-400 font-game text-2xl'>Pro</h2>}
                    </div>
                    
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='p-7 bg-zinc-900 rounded-2xl'>
                      {chapter?.exercises.map((exc, idxExc) => (
                        <div key={idxExc} className='flex items-center justify-between mb-7'>
                          <div className='font-game flex items-center gap-10'>
                            <h2 className='text-3xl'>Excercise {idx * chapter?.exercises?.length + idxExc + 1} </h2>
                            <h2 className='text-3xl'>{exc.name}</h2>
                          </div>

                          {


                            isExerciseCompleted(chapter?.chapterId, idxExc + 1) ?
                            <Link href={'/courses/' + courseDetail?.courseId + '/' + chapter?.chapterId + '/' + exc?.slug}>
                              <Button variant={'pixel'} className='bg-green-600'>Completed</Button> 
                            </Link> :
                              (courseDetail?.userEnrolled && (!hasUnlimitedAccess && idx<2)) ?
                                <Link href={'/courses/' + courseDetail?.courseId + '/' + chapter?.chapterId + '/' + exc?.slug}>
                                  <Button variant={'pixel'}>{exc?.xp} xp</Button>
                                </Link> :
                                hasUnlimitedAccess && courseDetail?.userEnrolled ?
                                <Link href={'/courses/' + courseDetail?.courseId + '/' + chapter?.chapterId + '/' + exc?.slug}>
                                  <Button variant={'pixel'}>{exc?.xp} xp</Button>
                                </Link> :
                               <Tooltip>
                                 <TooltipTrigger asChild>
                                   <Button variant={'pixelDisabled'}>...</Button>
                                 </TooltipTrigger>
                                 <TooltipContent>
                                  <p className='font-game text-lg'>Please enroll first</p>
                                 </TooltipContent>
                               </Tooltip>
                              }
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
      }
    </div>
  )
}

export default CourseChapters
