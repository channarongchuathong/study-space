import type { Course } from "../types/Course"
import { Link } from "react-router"
import { getTotalDuration } from "../utils/courseDuration"
import { useState } from "react"


type CourseSidebarProp = {
  course: Course
  lectureId?: string
}

function CourseSidebar({ course, lectureId }: CourseSidebarProp) {
  const data = localStorage.getItem("completedLessons")
  const completedLessons = data ? JSON.parse(data) : {}

  const completedCount = completedLessons[course.id]?.length || 0
  const courseLength = course.coursesDtl.length

  const progress = Math.round((completedCount / courseLength) * 100)

  const totalDuration = getTotalDuration(course.coursesDtl)

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mx-5 mb-5 bg-surface rounded-xl py-8 px-5 border border-border h-fit">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xl lg:text-2xl font-bold">บทเรียนทั้งหมด</p>
          <p className="text-muted">{course.coursesDtl.length} บทเรียน {totalDuration}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl lg:text-2xl text-end font-bold">{progress}%</p>
          <p className="text-muted">ความคืบหน้า</p>
        </div>
      </div>
      <div className="my-6">
        <div className="h-1 lg:h-3 rounded-full bg-slate-700">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <section>
        <div>

          <div onClick={() => setIsOpen(!isOpen)} className="p-5 flex justify-between items-center font-semibold border-t border-border cursor-pointer">
            <h1 className="text-base lg:text-xl">{course.name}</h1>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 transition-all ${isOpen ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
          <div className="text-sm mt-2">
            {isOpen && (
              <div className="w-full flex flex-col gap-2">

                {course.coursesDtl.map((lecture) => (
                  <Link key={lecture.id} to={`/course/${course.id}/lecture/${lecture.id}`}>
                    <div className={`rounded-lg border border-border ${lecture.id === lectureId ? "bg-primary/10" : ""}`}>
                      <div className="flex justify-between py-3 px-5 items-center hover:bg-black/20 cursor-pointer transition-all rounded-lg">
                        <div className="text-lg flex items-center gap-5">
                          <div className={`${lecture.id === lectureId ? "text-primary" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-sm lg:text-lg">{lecture.title}</h3>
                            <p className="text-sm lg:text-lg text-muted">{lecture.duration}</p>
                          </div>
                        </div>
                        <div>
                          {completedLessons[course.id]?.includes(lecture.id)
                            ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-primary">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                              </svg>
                            )
                            : (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}




              </div>
            )}
          </div>
        </div>

      </section>
    </div>
  )
}

export default CourseSidebar