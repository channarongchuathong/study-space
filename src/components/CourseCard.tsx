import type { Course } from "../types/Course"
import { Link } from "react-router"
import { getTotalDuration } from "../utils/courseDuration"

type CourseCardProps = {
    course: Course
    
}

function CourseCard({ course }: CourseCardProps) {

    const totalDuration = getTotalDuration(course.coursesDtl)

    return (

        <Link to={`/course/${course.id}`}>
            <div className="group w-full h-70 lg:h-90 border rounded-xl overflow-hidden shadow border-border cursor-pointer transition-all ">
                <div className="relative h-[50%] w-full">
                    <div className="h-full w-full overflow-hidden">
                        <img src={course.image} alt="img" className="h-full w-full object-cover group-hover:scale-110 transition-all " />
                    </div>
                    <span className="absolute left-2 lg:left-5 translate-y-1/2 bottom-0 bg-primary text-text text-xs lg:text-base font-semibold px-5 py-1 rounded-full shadow">{course.category}</span>
                </div>
                <div className="w-full h-[50%] p-3 lg:p-5 flex flex-col justify-between gap-2 bg-surface text-text">
                    <div className="w-full">
                        <h1 className="text-base lg:text-xl font-bold my-1">{course.name}</h1>
                        <p className="text-sm lg:text-base text-muted line-clamp-2">{course.description}</p>
                    </div>
                    <div className="flex justify-between items-center gap-3 text-sm">
                        <div className="flex gap-2 items-center">
                            <div className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs lg:text-base">{course.coursesDtl.length} บทเรียน</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p className="text-xs lg:text-base">{totalDuration}</p>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard