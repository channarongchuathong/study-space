import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import type { Course } from "../types/Course"
import { getCourses } from "../api/courseApi"
import MyCourseCard from "../components/MyCourseCard"
import { Link } from "react-router"


function MyCourses() {
    const [courses, setCourses] = useState<Course[]>([])
    const data = localStorage.getItem("completedLessons")
    const completedLessons = data ? JSON.parse(data) : {}



    useEffect(() => {
        async function fetchCourses() {
            const data = await getCourses()
            setCourses(data)
        }
        fetchCourses()
    }, [])

    const myCourses = courses.filter((course) => {
        return completedLessons[course.id]
    })

    return (
        <div className="bg-background min-h-screen">
            <Navbar></Navbar>
            <div className="container mx-auto">
                <section className="text-text">
                    <div className="flex flex-col gap-2 mt-10 px-5">
                        <h1 className="text-text text-xl lg:text-2xl scroll-mt-30">คอร์สของฉัน</h1>
                        <p className="text-muted text-sm lg:text-base">คุณมีคอร์สทั้งหมด {myCourses.length} คอร์ส กลับมาเรียนต่อจากบทล่าสุดได้ทุกเมื่อ</p>
                    </div>
                    <div className="px-5">
                        {myCourses.length === 0 ? (
                            <div className="mt-5 p-5 w-full h-80 flex flex-col gap-5 justify-center text-lg border border-border text-center rounded-xl">
                                <h1>ยังไม่มีคอร์สของคุณ</h1>
                                <p>เลือกคอร์สแล้วกด "เริ่มเรียน" คอร์สจะปรากฏที่นี่</p>
                                <Link to={"/"}>
                                    <button className="text-text text-xs lg:text-base rounded-lg bg-primary border-border px-3 py-2 hover:cursor-pointer hover:bg-primary/80">ดูคอร์สทั้งหมด</button>
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 gap-10 mx-5">
                                {myCourses.map((course) => {
                                    const completedCount = completedLessons[course.id]?.length || 0
                                    const courseLength = course.coursesDtl.length
                                    const progress = Math.round((completedCount / courseLength) * 100)
                                    return <MyCourseCard key={course.id} course={course} progress={progress}></MyCourseCard>
                                })}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MyCourses