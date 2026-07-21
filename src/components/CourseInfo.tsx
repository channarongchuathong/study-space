

function CourseInfo() {
  return (
    <div>
        
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden border border-border w-full">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400" alt="img" className="w-full object-cover" />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold">React + TypeSctipt สำหรับมือใหม่</h1>
                <p className="text-lg text-muted">เรียนรู้การสร้างเว็บแอปพลิเคชันด้วย React.js ตั้งแต่เริ่มต้นจนถึงระดับกลาง</p>
                <div className="flex gap-5">
                  <div className="flex gap-1">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <p>4 บทเรียน</p>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <p>6 ชม. 30 นาที</p>
                  </div>
                </div>
              </div>
            </div>
            <section className="bg-surface border border-border divide-y divide-border my-5 rounded-xl">
              <div className="flex flex-col gap-5 p-8">
                <h1 className="text-2xl font-bold">เกี่ยวกับคอร์ส</h1>
                <div className="text-muted text-lg flex flex-col gap-3">
                  <p>คอร์สนี้จะพาคุณไปเรียนรู้การสร้างแอปพลิเคชันด้วย React และ TypeScript อย่างเป็นขั้นตอน เหมาะสำหรับผู้เริ่มต้นที่ต้องการปูพื้นฐานให้แน่นและต่อยอดสู่การทำโปรเจกต์จริง</p>
                  <p>คุณจะได้เรียนรู้การใช้ Component, Props, State, Hooks และการทำงานกับ API พร้อมสร้างโปรเจกต์ตัวอย่างไปด้วยกันตลอดคอร์ส</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-10">
                <h1 className="text-2xl font-bold">หมวดหมู่</h1>
                <p className="text-lg ring ring-primary w-fit p-2 px-4 rounded-full">Programming</p>
              </div>
            </section>
    </div>
  )
}

export default CourseInfo