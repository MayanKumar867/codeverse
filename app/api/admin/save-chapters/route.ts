import db from "@/config/db";
import { CourseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const DATA =
    [
  {
    "id": 1,
    "name": "Introduction to React",
    "desc": "Understand what React is, why it exists, and how it makes UI development easier.",
    "exercises": [
      { "name": "What is React?", "slug": "what-is-react", "xp": 15, "difficulty": "easy" },
      { "name": "Why React?", "slug": "why-react", "xp": 15, "difficulty": "easy" },
      { "name": "React vs Vanilla JS", "slug": "react-vs-vanilla-js", "xp": 20, "difficulty": "easy" },
      { "name": "SPA Concept", "slug": "spa-concept", "xp": 20, "difficulty": "easy" },
      { "name": "React Ecosystem", "slug": "react-ecosystem", "xp": 20, "difficulty": "easy" }
    ]
  },
  {
    "id": 2,
    "name": "React Setup & Project Structure",
    "desc": "Learn how to set up a React project and understand its folder structure.",
    "exercises": [
      { "name": "Create React App / Vite", "slug": "create-react-app-vite", "xp": 25, "difficulty": "easy" },
      { "name": "Project Folder Tour", "slug": "project-folder-tour", "xp": 20, "difficulty": "easy" },
      { "name": "JSX Basics", "slug": "jsx-basics", "xp": 25, "difficulty": "easy" },
      { "name": "JSX Rules", "slug": "jsx-rules", "xp": 20, "difficulty": "easy" },
      { "name": "First React Component", "slug": "first-react-component", "xp": 30, "difficulty": "easy" }
    ]
  },
  {
    "id": 3,
    "name": "Components & Props",
    "desc": "Master reusable components and data passing using props.",
    "exercises": [
      { "name": "Functional Components", "slug": "functional-components", "xp": 25, "difficulty": "easy" },
      { "name": "Component Reusability", "slug": "component-reusability", "xp": 20, "difficulty": "easy" },
      { "name": "Props Basics", "slug": "props-basics", "xp": 25, "difficulty": "easy" },
      { "name": "Passing Data via Props", "slug": "passing-data-via-props", "xp": 30, "difficulty": "easy" },
      { "name": "Props Destructuring", "slug": "props-destructuring", "xp": 20, "difficulty": "easy" }
    ]
  },
  {
    "id": 4,
    "name": "State & Events",
    "desc": "Learn how React manages data and handles user interactions.",
    "exercises": [
      { "name": "What is State?", "slug": "what-is-state", "xp": 20, "difficulty": "easy" },
      { "name": "useState Hook", "slug": "use-state-hook", "xp": 30, "difficulty": "easy" },
      { "name": "Updating State", "slug": "updating-state", "xp": 25, "difficulty": "easy" },
      { "name": "Event Handling", "slug": "event-handling", "xp": 25, "difficulty": "easy" },
      { "name": "Controlled Inputs", "slug": "controlled-inputs", "xp": 30, "difficulty": "medium" }
    ]
  },
  {
    "id": 5,
    "name": "Conditional Rendering",
    "desc": "Show or hide UI elements based on conditions.",
    "exercises": [
      { "name": "If-Else Rendering", "slug": "if-else-rendering", "xp": 20, "difficulty": "easy" },
      { "name": "Ternary Operator", "slug": "ternary-operator", "xp": 20, "difficulty": "easy" },
      { "name": "Logical AND (&&)", "slug": "logical-and-rendering", "xp": 20, "difficulty": "easy" },
      { "name": "Loading States", "slug": "loading-states", "xp": 25, "difficulty": "easy" },
      { "name": "Auth Based UI", "slug": "auth-based-ui", "xp": 30, "difficulty": "medium" }
    ]
  },
  {
    "id": 6,
    "name": "Lists & Keys",
    "desc": "Render dynamic lists efficiently using keys.",
    "exercises": [
      { "name": "Rendering Lists", "slug": "rendering-lists", "xp": 20, "difficulty": "easy" },
      { "name": "Map Function in JSX", "slug": "map-function-jsx", "xp": 25, "difficulty": "easy" },
      { "name": "Why Keys Matter", "slug": "why-keys-matter", "xp": 20, "difficulty": "easy" },
      { "name": "Unique Keys", "slug": "unique-keys", "xp": 20, "difficulty": "easy" },
      { "name": "Dynamic Lists Practice", "slug": "dynamic-lists-practice", "xp": 30, "difficulty": "medium" }
    ]
  },
  {
    "id": 7,
    "name": "Basic Hooks Overview",
    "desc": "Get introduced to essential React hooks used in real projects.",
    "exercises": [
      { "name": "What are Hooks?", "slug": "what-are-hooks", "xp": 15, "difficulty": "easy" },
      { "name": "Rules of Hooks", "slug": "rules-of-hooks", "xp": 20, "difficulty": "easy" },
      { "name": "useEffect Basics", "slug": "use-effect-basics", "xp": 30, "difficulty": "medium" },
      { "name": "Effect Cleanup", "slug": "effect-cleanup", "xp": 25, "difficulty": "medium" },
      { "name": "Hooks Recap Challenge", "slug": "hooks-recap-challenge", "xp": 35, "difficulty": "medium" }
    ]
  }
]



export async function GET(req: NextRequest) {
    DATA.forEach(async (item) => {
        await db.insert(CourseChaptersTable).values({
            courseId: 1,
            desc: item?.desc,
            exercises: item?.exercises,
            name: item?.name,
            chapterId: item?.id,
        })
    })

    return NextResponse.json("Success")
}