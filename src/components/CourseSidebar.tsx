

function CourseSidebar() {
  return (
    <div className="bg-surface rounded-xl py-8 px-5 border border-border h-fit">
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl font-bold">บทเรียนทั้งหมด</p>
                  <p>4 บทเรียน 6 ชม 30 นาที</p>
                </div>
                <div>
                  <p className="text-2xl text-end font-bold">0%</p>
                  <p>ความคืบหน้า</p>
                </div>
              </div>
              <div className="my-3">
                <div className="h-2 rounded-full bg-slate-700">
                  <div
                    className="h-full w-0 rounded-full bg-primary"
                  />
                </div>
              </div>
              <section>
                <div className="collapse collapse-arrow rounded-lg">
                  <input type="radio" name="my-accordion-2" defaultChecked/>
                  <div className="collapse-title font-semibold border border-border rounded-lg">
                    <h1 className="text-lg">React + TypeSctipt สำหรับมือใหม่</h1>
                  </div>
                  <div className="collapse-content text-sm mt-2">
                    <div className="w-full">

                      <div className="flex justify-between px-2 items-center hover:bg-black/20 cursor-pointer transition-all">
                        <div className="text-lg">
                          <h3 className="font-semibold">What is React?</h3>
                          <p className="text-muted">20 นาที</p>
                        </div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                      </div>


                      <div className="flex justify-between px-2 items-center hover:bg-black/20 cursor-pointer transition-all">
                        <div className="text-lg">
                          <h3 className="font-semibold">Components & Props</h3>
                          <p className="text-muted">50 นาที</p>
                        </div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </section>
            </div>
  )
}

export default CourseSidebar