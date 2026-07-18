import Course from "../components/Course";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <section className="bg-background bg-[url('/images/hero.png')] bg-cover bg-right">
        <div className="container mx-auto">
          <div className="h-150">
            <div className="h-full flex flex-col justify-center gap-5">
              <h1 className="tex-text text-4xl text-text font-bold">
                พื้นที่สำหรับการเรียนรู้
                <br />
                <span className="text-primary">
                  ที่เติบโตไปพร้อมกับคุณ
                </span>
              </h1>
              <p className="text-muted">เรียนได้ทุกที่ ทุกเวลา กับหลักสูตรคุณภาพ<br />จากผู้เชี่ยวชาญในอุตสาหกรรม</p>
              <div className="flex gap-5">
                <button className="text-text rounded-lg bg-primary border-border px-3 py-2 hover:cursor-pointer hover:bg-primary/80">เริ่มเรียนรู้เลย</button>
                <button className="text-text rounded-lg border border-border px-3 py-2 hover:cursor-pointer hover:bg-white/10">ดูหลักสูตรทั้งหมด</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Search></Search>
      <Course></Course>
      <section className="mb-10">
        <div className="container mx-auto">
          <div className="flex justify-between text-text border border-border rounded-xl p-10 divide-x divide-border bg-surface">

            <div className="flex justify-between px-8 flex-1 gap-3 items-center">
              <div className="w-16 h-16">
                <img src="/images/icon/icon-1.png" alt="icon" className="h-full w-full object-contain"/>
              </div>
              <div>
                <h1 className="font-semibold text-lg">เรียนได้ทุกที่ ทุกเวลา</h1>
                <p className="text-muted">เรียนผ่านทุกอุปกรณ์<br/>ได้ทุกที่ที่คุณต้องการ</p>
              </div>
            </div>

            <div className="flex justify-between px-8 flex-1 gap-3 items-center">
              <div className="w-16 h-16">
                <img src="/images/icon/icon-2.png" alt="icon" className="h-full w-full object-contain"/>
              </div>
              <div>
                <h1 className="font-semibold text-lg">ติดตามความก้าวหน้า</h1>
                <p className="text-muted">ระบบติดตามการเรียนรู้<br/>ช่วยให้คุณพัฒนาต่อเนื่อง</p>
              </div>
            </div>

           <div className="flex justify-between px-8 flex-1 gap-3 items-center">
              <div className="w-16 h-16">
                <img src="/images/icon/icon-3.png" alt="icon" className="h-full w-full object-contain"/>
              </div>
              <div>
                <h1 className="font-semibold text-lg">เรียนเป็นขั้น เป็นตอน</h1>
                <p className="text-muted">เนื้อหาจัดเป็นบทเรียน<br/>เข้าใจง่ายและนำไปใช้ได้จริง</p>
              </div>
            </div>

           <div className="flex justify-between px-8 flex-1 gap-3 items-center">
              <div className="w-16 h-16">
                <img src="/images/icon/icon-4.png" alt="icon" className="h-full w-full object-contain"/>
              </div>
              <div>
                <h1 className="font-semibold text-lg">เรียนรู้จากผู้เชี่ยวชาญ</h1>
                <p className="text-muted">คอร์สคุณภาพจากผู้สอนตัวจริง<br/>ในแต่ละสายงาน</p>
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