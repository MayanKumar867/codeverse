import { currentUser } from '@clerk/nextjs/server';
import { exercise } from './../../../(routes)/courses/_components/ListCourses';
import { NextRequest, NextResponse } from "next/server";
import db from '@/config/db';
import { CompletedExerciseTable, EnrolledCourseTable, usersTable } from '@/config/schema';
import { eq, sql } from 'drizzle-orm';

export async function POST(req:NextRequest) {
    const {courseId,chapterId , exerciseId, xpEarned} = await req.json();
    const user= await currentUser();
    // if (user) {
    // return NextResponse.json(
    //   { error: 'Unauthorized' },
    //   { status: 401 }
    // );
 // }
  
  const result = await db.insert(CompletedExerciseTable).values({
        chapterId: chapterId,
        courseId:courseId,
        exerciseId:exerciseId,
        userId: user?.primaryEmailAddress?.emailAddress
    }).returning()

    //Update course xp earned
    await db.update(EnrolledCourseTable).set({
        xpEarned:sql`${EnrolledCourseTable.xpEarned} + ${xpEarned}`
    }).where(eq(EnrolledCourseTable?.courseId, courseId))
    
    //Update user xp earned (points)
    await db.update(usersTable).set({
        points:sql`${usersTable.points}+ ${xpEarned}`
        //@ts-ignore
    }).where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress))

    return NextResponse.json(result);
}


// import { auth } from '@clerk/nextjs/server';
// import { NextRequest, NextResponse } from "next/server";
// import db from '@/config/db';
// import { CompletedExerciseTable } from '@/config/schema';

// export async function POST(req: NextRequest) {
//   const { courseId, chapterId, exerciseId } = await req.json();

//   const { userId } = await auth(); //

//   if (!userId) {
//     return NextResponse.json(
//       { error: 'Unauthorized' },
//       { status: 401 }
//     );
//   }

//   const result = await db.insert(CompletedExerciseTable).values({
//     chapterId,
//     courseId,
//     exerciseId,
//     userId
//   }).returning();

//   return NextResponse.json(result);
// }
