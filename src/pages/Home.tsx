import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { getCourses } from "../api/courseApi";
import { useEffect, useState } from "react";
import type { Course } from "../types/Course";
import { getCategories, getCoursesByCategory } from "../api/categoriesApi";

function Home() {

  const [courses, setCourses] = useState<Course[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [category, setCategory] = useState("All")

  useEffect(() => {

    async function fetchCourses() {
      let data

      if (category === "All") {
        data = await getCourses()
      } else {
        data = await getCoursesByCategory(category)
      }
      setCourses(data)
    }
    fetchCourses()
  }, [category])

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  const [search, setSearch] = useState("")
  const [inputValue, setInputValue] = useState("")


  const filteredCourses = courses.filter((course) => {
    return course.name.toLowerCase().includes(search.toLowerCase())
  })





  return (
    <div className="bg-background">
      <Navbar />
      <section className="relative bg-background">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover lg:bg-center xl:bg-right"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black form-0% via-black/80 via-100% md:via-40% to-transparent to-60%"></div>
        <div className="relative z-10 container mx-auto">
          <div className="h-100 lg:h-150 px-5">
            <div className="h-full flex flex-col justify-center gap-5">
              <h1 className="tex-text text-4xl text-text font-bold">
                พื้นที่สำหรับการเรียนรู้
                <br />
                <span className="text-primary">
                  ที่เติบโตไปพร้อมกับคุณ
                </span>
              </h1>
              <p className="text-muted">เรียนได้ทุกที่ ทุกเวลา กับหลักสูตรคุณภาพ<br />จากผู้เชี่ยวชาญในอุตสาหกรรม</p>
              <div className="flex gap-3 lg:gap-5">
                <button className="text-text text-xs lg:text-base rounded-lg bg-primary border-border px-3 py-2 hover:cursor-pointer hover:bg-primary/80">เริ่มเรียนรู้เลย</button>
                <a href="#courses"><button className="text-text text-xs lg:text-base rounded-lg border border-border px-3 py-2 hover:cursor-pointer hover:bg-white/10">ดูหลักสูตรทั้งหมด</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <Search value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setSearch(inputValue)
            }
          }}
          categories={categories}
          category={category}
          onSelectCategory={(category) => {
            setCategory(category)
          }}
        />
        <div className="container mx-auto">
          <div className="flex justify-between items-center mt-10 px-5">
            <h1 id="courses" className="text-text text-2xl scroll-mt-30">คอร์สทั้งหมด</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 py-10 gap-10 mx-5">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-text border border-border rounded-xl py-5 lg:p-10  lg:divide-x divide-border bg-surface">

            <div className="flex flex-col xl:flex-row px-4 lg:px-8 flex-1 gap-3 lg:gap-6 items-center">
              <div className="w-16 h-16">
                <img src="/images/icon/icon-1.png" alt="icon" className="h-full w-full object-contain" />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-lg">เรียนได้ทุกที่ ทุกเวลา</h1>
                <p className="text-muted text-xs lg:text-base">เรียนผ่านทุกอุปกรณ์<br />ได้ทุกที่ที่คุณต้องการ</p>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row px-4 lg:px-8 flex-1 gap-3 lg:gap-6 items-center">
              <div className="w-16 h-16">
                <img src="/images/icon/icon-2.png" alt="icon" className="h-full w-full object-contain" />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-lg">ติดตามความก้าวหน้า</h1>
                <p className="text-muted text-xs lg:text-base">ระบบติดตามการเรียนรู้<br />ช่วยให้คุณพัฒนาต่อเนื่อง</p>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row px-4 lg:px-8 flex-1 gap-3 lg:gap-6 items-center">
              <div className="w-16 h-16">
                <img src="/images/icon/icon-3.png" alt="icon" className="h-full w-full object-contain" />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-lg">เรียนเป็นขั้น เป็นตอน</h1>
                <p className="text-muted text-xs lg:text-base">เนื้อหาจัดเป็นบทเรียน<br />เข้าใจง่ายและนำไปใช้ได้จริง</p>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row px-4 lg:px-8 flex-1 gap-3 lg:gap-6 items-center">
              <div className="w-16 h-16">
                <img src="/images/icon/icon-4.png" alt="icon" className="h-full w-full object-contain" />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-lg">เรียนรู้จากผู้เชี่ยวชาญ</h1>
                <p className="text-muted text-xs lg:text-base">คอร์สคุณภาพจากผู้สอนตัวจริง<br />ในแต่ละสายงาน</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>


  )
}

export default Home