import Navbar from "../components/Navbar"
import CourseSidebar from "../components/CourseSidebar"
import Video from "../components/Video"


function LecturePage() {
    return (
        <div className="bg-background text-text">
            <Navbar></Navbar>
            <div className="container mx-auto min-h-screen">
                <div className="my-5 flex gap-2 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <p>กลับไปหน้าแรก</p>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-7">
                        <Video></Video>
                    </div>
                    <div className="col-span-5">
                        <CourseSidebar></CourseSidebar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LecturePage