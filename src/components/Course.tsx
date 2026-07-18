

function Course() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mt-10">
                <h1 className="text-text text-2xl">แนะนำสำหรับคุณ</h1>
                <span className="text-primary">ดูทั้งหมด</span>
            </div>
            <div className="grid grid-cols-4 py-10">

                <div className="border rounded-xl overflow-hidden h-80 shadow border-border">
                    <div className="relative h-[50%]">
                        <img src="/images/course/react.png" alt="img" className="h-full w-full object-cover" />
                        <span className="absolute left-5 translate-y-1/2 bottom-0 bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow">PROGRAMMING</span>
                    </div>
                    <div className="h-[50%] p-5 flex flex-col justify-between bg-surface text-text">
                        <h1 className="text-2xl font-bold">React 101</h1>
                        <p className="text-muted">Channarong C.</p>
                        <p className="text-muted">28 บทเรียน 6 ชม. 30 น.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Course