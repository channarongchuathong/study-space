import type { Course } from "../types/Course"
import { getTotalDuration } from "../utils/courseDuration"
import { Link } from "react-router"

type CourseInfoProp = {
  course: Course
}

function CourseInfo({ course }: CourseInfoProp) {
  const totalDuration = getTotalDuration(course.coursesDtl)
  return (
    <div className="mx-5">

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden border border-border w-full">
          <img src={course.image} alt="img" className="w-full h-80 object-cover" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl lg:text-4xl font-bold">{course.name}</h1>
          <p className="text-sm lg:text-base text-muted">{course.description}</p>
          <div className="flex gap-5">
            <div className="flex gap-1">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <p className="text-sm lg:text-base">{course.coursesDtl.length} บทเรียน</p>
            </div>
            <div className="flex gap-1">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <p className="text-sm lg:text-base">{totalDuration}</p>
            </div>
          </div>
          <div className="flex flex-1 items-center">
            <Link to={`/course/${course.id}/lecture/${course.coursesDtl[0].id}`} className="w-full">
              <button className="w-full flex gap-2 justify-center border border-border rounded-xl px-10 py-5 bg-primary hover:bg-primary/80 cursor-pointer">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>เริ่มเรียนคอร์สนี้</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section className="bg-surface border border-border divide-y divide-border my-5 rounded-xl">
        <div className="flex flex-col gap-5 p-5 lg:p-10">
          <h1 className="text-xl lg:text-2xl font-bold">เกี่ยวกับคอร์ส</h1>
          <div className="text-muted text-lg flex flex-col gap-3">
            <p className="text-sm lg:text-base">{course.description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 lg:p-10">
          <h1 className="text-xl lg:text-2xl font-bold">หมวดหมู่</h1>
          <p className="text-base lg:text-lg ring ring-primary w-fit p-2 px-4 rounded-full">{course.category}</p>
        </div>
      </section>
    </div>
  )
}

export default CourseInfo