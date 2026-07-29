
import type { Course, CourseDetail } from "../types/Course"

type VideoProp = {
    course: Course
    currentLecture: CourseDetail
    onComplete: () => void
    isCompleted: boolean
}

function Video({ course, currentLecture, onComplete, isCompleted }: VideoProp) {

    return (
        <div className="mx-5 rounded-xl overflow-hidden border border-border bg-surface">
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/gNg_pKbH0os?si=lEktB6IbkTUwKA3q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="flex flex-col gap-5 p-5">
                <button onClick={onComplete} className="text-text rounded-lg bg-primary border-border px-3 py-2 hover:cursor-pointer hover:bg-primary/80">{isCompleted ? "✓ เรียนจบแล้ว" : "ทำเครื่องหมายว่าเรียนจบ"}</button>
                <h1 className="text-2xl lg:text-4xl font-bold">{currentLecture.title}</h1>
                <div className="flex gap-2">
                    <div className="flex items-center p-3 border border-border rounded-full gap-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                            </svg>
                        </div>
                        <p className="text-sm lg:text-base">{course.category}</p>
                    </div>
                    <div className="flex items-center p-3 border border-border rounded-full gap-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <p className="text-sm lg:text-base">{currentLecture.duration}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Video