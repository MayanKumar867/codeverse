'use client'
import React from 'react'
import { Sandpack, useSandpack } from "@codesandbox/sandpack-react";
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
} from "@codesandbox/sandpack-react";
import dynamic from 'next/dynamic';
const SplitterLayout = dynamic(
  () => import('react-splitter-layout'),
  { ssr: false }
);
import { CourseExercise } from '../page';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';

type Props = {
  courseExerciseData: CourseExercise | undefined
  loading: boolean
}

const CodeEditorChildren = ({onCompleteExercise, IsCompleted}:any) => {
    const {sandpack} = useSandpack();
    return(
        <div className='font-game absolute bottom-40 right-5 flex gap-5 z-50 pointer-events-auto'>
           <Button variant={'pixel'} className=' bg-[#a3e] text-xl' size={'lg'}  onClick={() => sandpack.runSandpack()}>Run Code</Button>
           <Button variant={'pixel'}  size={'lg'}  className='bg-[#a3e534] text-xl' onClick={()=>onCompleteExercise()} disabled={IsCompleted}>{IsCompleted?'Already Completed!': 'Mark Completed!'} </Button>
        </div>
    )
}

const CodeEditor = ({ courseExerciseData, loading }: Props) => {
    const ContentInfo = courseExerciseData?.exerciseData;
    // const params = useParams();
    const {exerciseslug} = useParams(); // Removed duplicate declaration

    const exerciseIndex = courseExerciseData?.exercise?.findIndex(item=>item.slug == exerciseslug)
    const IsCompleted = courseExerciseData?.completedExercise.find(item=>item?.exerciseId==Number(exerciseIndex)+1)
    // Removed duplicate declaration of exerciseslug
    const onCompleteExercise = async()=> {
       
       if (exerciseIndex == undefined) {
         return;
       }
       
       const result = await axios.post('/api/exercise/complete', {
          courseId:courseExerciseData?.courseId,
          chapterId:courseExerciseData?.chapterId,
          exerciseId: String(exerciseIndex + 1),
          xpEarned:courseExerciseData?.exercise[exerciseIndex].xp
       })
       console.log(result);
       toast.success("Exercise Completed")
    }
    
    return (
        <div>
            <SandpackProvider 
             theme={'dark'}
             //@ts-ignore
             template={courseExerciseData?.editorType ?? 'react'}
             style={{height:'100vh'}}
             files={ContentInfo?.exercisesContent?.starterCode}
             options={{autoReload:false, autorun:false}}
            >
                <SandpackLayout style={{height:'100%'}}>
                    <SplitterLayout percentage primaryMinSize={30} secondaryMinSize={30} secondaryInitialSize={50}>

                    <div className='relative h-full'>   
                    <SandpackCodeEditor showTabs style={{height:'100%'}} />
                    <CodeEditorChildren onCompleteExercise={onCompleteExercise} IsCompleted={IsCompleted}/>
                    </div>    
                    <SandpackPreview showNavigator showOpenInCodeSandbox={false} showOpenNewtab style={{height:'100%'}} />
                    </SplitterLayout>
                </SandpackLayout>
            </SandpackProvider>

            
        </div>
    )
}

export default CodeEditor
