

function Video() {
    return (
        <div className="rounded-xl overflow-hidden border border-border bg-surface">
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/gNg_pKbH0os?si=lEktB6IbkTUwKA3q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="flex flex-col gap-5 p-5">
                <h1 className="text-4xl font-bold">What is React?</h1>
                <div className="flex gap-2">
                    <p className="p-2 border border-primary rounded-full">Programming</p>
                    <p className="p-2 border border-primary rounded-full">20 min</p>
                </div>
                <button className="text-text rounded-lg bg-primary border-border px-3 py-2 hover:cursor-pointer hover:bg-primary/80">ทำเครื่องหมายว่าเรียนจบ</button>
            </div>
        </div>
    )
}

export default Video