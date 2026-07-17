import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
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
    </div>


  )
}

export default Home