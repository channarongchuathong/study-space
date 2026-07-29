import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function About() {
    return (
        <div className="bg-background">
            <Navbar />
            <div className="container mx-auto divide-y divide-border">
                <section className="flex h-80 lg:h-100 w-full px-5">
                    <div className="w-full flex flex-col gap-4 justify-center items-center text-text">
                        <p className="text-lg lg:text-2xl text-primary">เกี่ยวกับ StudySpace</p>
                        <h1 className="text-2xl lg:text-6xl">พื้นที่สำหรับการเรียนรู้<br />ที่เติบโตไปพร้อมกับคุณ</h1>
                        <p className="lg:text-xl text-center">เราเชื่อว่าการเรียนรู้ที่ดี ควรเข้าถึงได้ทุกคน<br />ทุกที่ ทุกเวลา และช่วยให้คุณกลายเป็นเวอร์ชันที่ดีที่สุดของตัวเอง</p>
                    </div>
                </section>
                <section className="text-text p-5">
                    <div className="text-center">
                        <h1 className="text-xl lg:text-4xl">Our Mission</h1>
                        <p className="text-sm lg:text-base text-muted">ภารกิจของเราคือช่วยให้คุณเรียนรู้และพัฒนาทักษะได้อย่างมีประสิทธิภาพ</p>
                    </div>
                    <div className="my-5 flex justify-between lg:gap-5 text-center divide-x divide-border bg-surface rounded-lg">
                        <div className="p-2 lg:p-5 lg:px-20 flex flex-col gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 lg:size-10 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <h1 className="text-sm lg:text-lg">เรียนได้ทุกที่ ทุกเวลา</h1>
                            <p className="text-xs lg:text-base text-muted">เรียนผ่านคอมพิวเตอร์ แท็บเล็ต และมือถือ ได้ทุกที่ทุกเวลาที่คุณต้องการ</p>
                        </div>
                        <div className="p-2 lg:p-5 lg:px-20 flex flex-col gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 lg:size-10 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                            <h1 className="text-sm lg:text-lg">พัฒนาตัวเองอย่างต่อเนื่อง</h1>
                            <p className="text-xs lg:text-base text-muted">เรียนรู้ทักษะใหม่อย่างเป็นขั้นตอน พร้อมเติบโตในทุกสายอาชีพ</p>
                        </div>
                        <div className="p-2 lg:p-5 lg:px-20 flex flex-col gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 lg:size-10 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                            <h1 className="text-sm lg:text-lg">เน้นการนำไปใช้จริง</h1>
                            <p className="text-xs lg:text-base text-muted">เนื้อหาที่ออกแบบเพื่อการใช้งานจริง ทั้งการเรียนและการทำงาน</p>
                        </div>
                    </div>
                </section>
                <section className="m-10">
                    <div className="grid lg:grid-cols-2 gap-5 text-text">
                        <div className="flex flex-col gap-5 lg:pl-15">
                            <p className="text-primary">WHY STUDYSPACE</p>
                            <h2 className="text-2xl">ทำไมต้อง StudySpace?</h2>
                            <div className="flex flex-col gap-3 lg:text-lg">
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p>คอร์สคุณภาพจากผู้เชี่ยวชาญ</p>
                                </div>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p>เนื้อหาการเรียนเป็นขั้นเป็นตอน เข้าใจง่าย</p>
                                </div>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p>เรียนได้ทุกอุปกรณ์</p>
                                </div>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p>ทบทวนบทเรียนได้ตลอดเวลา ไม่มีหมดอายุ</p>
                                </div>
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p>อัปเดตเนื้อหาใหม่อยู่เสมอ ไม่ตกเทรนด์</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:h-100">
                            <img src="/images/img-about.png" alt="img" className="h-full object-cover rounded-2xl" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About
