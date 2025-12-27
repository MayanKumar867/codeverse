import React from 'react'
import { CourseExercise } from '../page'
import { Skeleton } from '@/components/ui/skeleton'
import { Lightbulb } from 'lucide-react'

type Props = {
  courseExerciseData: CourseExercise | undefined
  loading: boolean
}


const ContentSection = ({ courseExerciseData, loading }: Props) => {

  const ContentInfo = courseExerciseData?.exerciseData;

  if (
    loading ||
    !ContentInfo ||
    !courseExerciseData.exerciseData.exercisesContent
  ) {
    return <Skeleton className='h-full w-full m-10 rounded-2xl' />
  }

  return (
    <div className='p-10 mb-28'>

      <div>
        <h2 className='font-game w-full m-10 rounded-2xl'>{courseExerciseData?.exerciseData?.exerciseName}</h2>

        <div
          dangerouslySetInnerHTML={{
            __html: ContentInfo.exercisesContent.content
          }}
        />

        <div>
          <h2 className='font-game text-3xl mt-4'>Task</h2>
          <div className='p-4 rounded-2xl bg-zinc-800'
            dangerouslySetInnerHTML={{
              __html: ContentInfo.exercisesContent.task
            }}
          />
        </div>

        <div>
          <h2 className='font-game text-3xl mt-4 text-yellow-400 flex gap-2 items-center'> <Lightbulb/>Hint</h2>
          <div className='p-4 rounded-2xl bg-zinc-800'
            dangerouslySetInnerHTML={{
              __html: ContentInfo.exercisesContent.hint
            }}
          />
        </div>
      </div>

    </div>

  )
}

export default ContentSection;

