import Navbar from "../components/Navbar"
import CourseSidebar from "../components/CourseSidebar"
import Video from "../components/Video"
import { useParams } from "react-router"
import { useState } from "react"
import type { Course } from "../types/Course"
import { useEffect } from "react"
import { getCourseById } from "../api/courseIdApi"
import { Link } from "react-router"

function LecturePage() {
    const { courseId, lectureId } = useParams()

    const [course, setCourse] = useState<Course | null>(null)

    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {

        async function fetchCourseById() {
            if (!courseId) return
            const data = await getCourseById(courseId)

            setCourse(data)
        }
        fetchCourseById()

    }, [courseId])


    useEffect(() => {

        if (!course) return

        const currentLecture = course.coursesDtl.find((lecture) => lecture.id === lectureId)

        if (!currentLecture) return

        const data = localStorage.getItem("completedLessons")
        const completedLessons = data ? JSON.parse(data) : {}

        if (completedLessons[course.id]) {
            if (completedLessons[course.id].includes(currentLecture.id)) {
                setIsCompleted(true)
            } else {
                setIsCompleted(false);
            }
        } else {
            setIsCompleted(false)
        }

    }, [course, lectureId])

    if (!course) {
        return <p>Loading...</p>
    }

    const currentLecture = course.coursesDtl.find((lecture) => lecture.id === lectureId)

    if (!currentLecture) {
        return <p>Lecture not found</p>;
    }


    const handleComplete = () => {

        const data = localStorage.getItem("completedLessons")
        const completedLessons = data ? JSON.parse(data) : {}

        if (!completedLessons[course.id]) {
            completedLessons[course.id] = []
        }

        if (!completedLessons[course.id].includes(currentLecture.id)) {
            completedLessons[course.id].push(currentLecture.id)
        }

        localStorage.setItem("completedLessons", JSON.stringify(completedLessons))

        setIsCompleted(true)
    }


    return (
        <div className="bg-background text-text">
            <Navbar></Navbar>
            <div className="container mx-auto min-h-screen">
                <Link to={`/course/${courseId}`}>
                    <div className="my-5 mx-5 flex gap-2 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </div>
                        <p>กลับไปหน้าคอร์ส</p>
                    </div>
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-7">
                        <Video course={course} currentLecture={currentLecture} onComplete={(handleComplete)} isCompleted={isCompleted} ></Video>
                    </div>
                    <div className="lg:col-span-5">
                        <CourseSidebar course={course} lectureId={lectureId}></CourseSidebar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LecturePage