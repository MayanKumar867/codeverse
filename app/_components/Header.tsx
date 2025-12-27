'use client'
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { useParams, usePathname } from "next/navigation";
import axios from "axios";
import { Course } from "../(routes)/courses/_components/ListCourses";
const courses = [
  {
    id: 1,
    name: 'HTML Basics',
    desc: 'Learn the fundamentals of HTML and build the structure of modern web pages.',
    path: 'course/1/details'
  },
  {
    id: 2,
    name: 'CSS Mastery',
    desc: 'Understand styling, layouts, flexbox, and grid to create beautiful web designs.',
    path: 'course/2/details'
  },
  {
    id: 3,
    name: 'JavaScript Essentials',
    desc: 'Master the basics of JavaScript, DOM manipulation, and interactive UI building.',
    path: 'course/3/details'
  },
  {
    id: 4,
    name: 'React for Beginners',
    desc: 'Build dynamic and responsive UI using React components and hooks.',
    path: 'course/4/details'
  },
  {
    id: 5,
    name: 'Node.js & Express',
    desc: 'Learn backend development with Node.js and build REST APIs using Express.',
    path: 'course/5/details'
  },
  {
    id: 6,
    name: 'MongoDB Database',
    desc: 'Understand NoSQL concepts and learn how to work with MongoDB databases.',
    path: 'course/6/details'
  },
  {
    id: 7,
    name: 'Python Programming',
    desc: 'Start coding in Python and explore scripting, automation, and core programming.',
    path: 'course/7/details'
  },
  {
    id: 8,
    name: 'Tailwind CSS',
    desc: 'Learn utility-first styling to rapidly build modern, responsive websites.',
    path: 'course/8/details'
  },
  {
    id: 9,
    name: 'TypeScript Crash Course',
    desc: 'Add static typing to JavaScript using TypeScript for scalable development.',
    path: 'course/9/details'
  },
  {
    id: 10,
    name: 'Full-Stack Development',
    desc: 'A complete guide to frontend + backend development with modern tools.',
    path: 'course/10/details'
  }
];


const Header = () => {
  const { user } = useUser();
  const path = usePathname();
  const { exerciseslug } = useParams(); //We get execise slug(excercise topic) from this instead of navbar
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    GetCourses();
  }, [])
  const GetCourses = async () => {
    // const result = await axios.get('/api/course');
    // console.log(result.data);
    // setCourses(result.data);
    const result = await axios.get('/api/course');

  if (Array.isArray(result.data)) {
    setCourses(result.data);
  } 
  else if (Array.isArray(result.data.courses)) {
    setCourses(result.data.courses);
  } 
  else {
    console.error("Unexpected /api/course response:", result.data);
    setCourses([]);
  }
  }
  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      <div className="flex gap-2 items-center">
        <Link href={'/'}>
        <Image src={'/logo.png'} alt='logo' width={40} height={40} /> </Link>
        <h2 className="font-game text-3xl font-bold">CodeVerse</h2>
       
      </div>

      {/* Navbar */}
      {!exerciseslug && courses ? <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger >Cource</NavigationMenuTrigger>
            {/* <NavigationMenuContent>
                            <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                                {courses.map((course,idx)=>(
                                  <Link href={'/courses/'+course?.courseId} key={idx}>
                                    <div  className="p-4 rounded-lg hover:bg-accent hover:cursor-pointer">
                                        <h2 className="font-medium">{course?.title}</h2>
                                        <p className="text-sm text-gray-500">{course?.desc}</p>
                                    </div>
                                    </Link>
                                ))}
                            </ul>
                        </NavigationMenuContent> */}


            <NavigationMenuContent>
              <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                {courses.map((course, idx) => (
                  <li key={idx}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/courses/${course.courseId}`}
                        className="block p-4 rounded-lg hover:bg-accent"
                      >
                        <h2 className="font-medium">{course.title}</h2>
                        <p className="text-sm text-gray-500">{course.desc}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>

          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={'/about'}>About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={'/pricing'}>Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={'/support'}>Support</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> :
        <h2 className="text-2xl">{exerciseslug?.toString()?.replaceAll("-", ' ').toLocaleUpperCase()}</h2>}
      {!user ?
        <Link href={'/sign-in'}> <Button className="font-game text-2xl" variant={"pixel"}>SignUp</Button></Link> :
        <div className="flex gap-4 items-center">
          <Link href={'/dashboard'}><Button className="font-game text-2xl" variant={"pixelNeon"} >Dashboard</Button></Link>
          <UserButton />
        </div>
      }


    </div>
  )
}

export default Header
