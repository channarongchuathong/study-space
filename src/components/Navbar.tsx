
function Navbar() {
    return (
        <div className="bg-background border-b border-border">
            <div className="container mx-auto">
                <div className="flex justify-between h-20 px-2 lg:px-10 items-center text-text text-md">
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
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 min-h-full w-80 p-4">

                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-full">
                        <img src="/images/logo.png" alt="logo" className="h-full w-auto p-5" />
                    </div>
                    <ul className="hidden lg:flex gap-8">
                        <li><a href="#">หน้าแรก</a></li>
                        <li><a href="#">คอร์สของฉัน</a></li>
                        <li><a href="#">เกี่ยวกับเรา</a></li>
                        <li><a href="#">ติดต่อเรา</a></li>
                    </ul>
                    <div className="lg:hidden btn btn-circle border-border w-10 h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <div className="hidden lg:flex gap-5 items-center">
                        <div>
                            <label className="hidden lg:flex input w-64 rounded-lg border border-border">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" />
                            </label>
                        </div>
                        <button className="hover:text-primary hover:cursor-pointer">เข้าสู่ระบบ</button>
                        <button className="rounded-lg bg-primary border-border px-3 py-2 hover:cursor-pointer hover:bg-primary/80">เริ่มเรียนรู้</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar