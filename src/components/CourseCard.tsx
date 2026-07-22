import type { Course} from "../types/Course"

type CourseCardProps = {
    course: Course
}

function CourseCard({course}: CourseCardProps) {

    return (

        <div className="w-84 h-90 border rounded-xl overflow-hidden shadow border-border hover:scale-110 cursor-pointer transition-all">
            <div className="relative h-[50%]">
                <img src={course.image} alt="img" className="h-full w-full object-cover" />
                <span className="absolute left-5 translate-y-1/2 bottom-0 bg-white text-blue-600 font-semibold px-5 py-1 rounded-full shadow">{course.category}</span>
            </div>
            <div className="h-[50%] p-5 flex flex-col justify-between gap-2 bg-surface text-text">
                <div>
                    <h1 className="text-xl font-bold">{course.name}</h1>
                    <p className="text-muted">{course.description}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-muted">{course.coursesDtl.length} บทเรียน {course.totalDuration}</p>
                    <div className="flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <span>4.8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard