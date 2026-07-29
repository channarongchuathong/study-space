import { Link } from "react-router"
function Navbar() {
    return (
        <div className="bg-background/80 border-b border-border sticky top-0 z-50 backdrop-blur-md">
            <div className="container mx-auto">
                <div className="relative flex justify-between h-20 px-2 lg:px-10 items-center text-text text-md ">
                    <div className="drawer lg:hidden w-10">
                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-1" className="drawer-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay bg-black/50"></label>
                            <ul className="menu bg-surface  min-h-full w-[80%] p-4">

                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="h-full flex flex-1 lg:flex-none absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                        <Link to="/">
                            <img src="/images/logo.png" alt="logo" className="h-full w-auto p-5 object-contain" />
                        </Link>
                    </div>
                    <ul className="relative group hidden lg:flex gap-8">
                        <li className="text-text hover:text-primary transition-all duration-300"><Link to="/">หน้าแรก</Link></li>
                        <li className="text-text hover:text-primary transition-all duration-300">คอร์สของฉัน</li>
                        <li className="text-text hover:text-primary transition-all duration-300"><Link to={"/about"}>เกี่ยวกับเรา</Link></li>

                    </ul>

                    <div className="hidden lg:flex gap-5 items-center">

                        <Link to={"/login"}><button className="rounded-lg bg-primary border-border px-3 py-2 hover:cursor-pointer hover:bg-primary/80">เข้าสู่ระบบ</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar