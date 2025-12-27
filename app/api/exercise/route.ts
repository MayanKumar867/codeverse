import CourseChapters from "@/app/(routes)/courses/[courseId]/_components/CourseChapters";
import db from "@/config/db";
import { CompletedExerciseTable, CourseChaptersTable, CourseTable, ExerciseTable } from "@/config/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

//api end point for featching course info along with the exercise contant
export async function POST(req:NextRequest) {
    const {courseId, chapterId, exerciseId}= await req.json();

    const courseInfo = await db.select().from(CourseTable).where(eq(CourseTable.courseId, courseId));

    const courseResult= await db.select().from(CourseChaptersTable)
    //@ts-ignore
    .where(and(eq(CourseChaptersTable.courseId , courseId), eq(CourseChaptersTable.chapterId , Number(chapterId))))
   
    const exerciseresult = await db.select().from(ExerciseTable).where(and(eq(ExerciseTable.courseId, courseId),
    eq(ExerciseTable.exerciseId, exerciseId)
))

//Get Completed Exercise in that Course/Chapters
const completedExercise = await db.select().from(CompletedExerciseTable).where(and(eq(CompletedExerciseTable?.courseId, courseId),eq(CompletedExerciseTable?.chapterId, chapterId) ))
    return NextResponse.json({
        ...courseResult[0],
        exercisesData:exerciseresult[0],
        completedExercise: completedExercise,
        editorType:courseInfo[0]?.editorType
    })
}



