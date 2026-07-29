
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay bg-black/50"></label>
                            <aside className="flex flex-col bg-surface min-h-full w-[80%] p-4 ">
                                <div className="flex justify-end">
                                    <label
                                        htmlFor="my-drawer-1"
                                        className="p-1 border border-border rounded-full cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </label>
                                </div>
                                <div className="flex flex-col flex-1 justify-between p-5">
                                    <ul>
                                        <img src="/images/logo.png" alt="logo" className="h-20 w-auto p-5 object-contain" />
                                        <div className="flex flex-col divide-y divide-border mt-5 font-light text-sm">
                                            <Link to={"/"}>
                                                <li className="flex gap-4 items-center py-5 border-t border-border">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-primary bg-primary/10 rounded-md p-1.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                    </svg>
                                                    <div>หน้าแรก</div>
                                                </li>
                                            </Link>
                                            <Link to={"/my-courses"}>
                                                <li className="flex gap-4 items-center py-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-primary bg-primary/10 rounded-md p-1.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                                    </svg>
                                                    <div>คอร์สของฉัน</div>
                                                </li>
                                            </Link>
                                            <Link to={"/about"}>
                                                <li className="flex gap-4 items-center py-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-primary bg-primary/10 rounded-md p-1.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>
                                                    <div>เกี่ยวกับเรา</div>
                                                </li>
                                            </Link>

                                        </div>
                                    </ul>
                                    <Link to={"/login"}>
                                        <div className="flex gap-4 p-4 border border-primary  rounded-lg text-sm items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                            <div>เข้าสู่ระบบ</div>
                                        </div>
                                    </Link>
                                </div>

                            </aside>
                        </div>

                    </div>
                    <div className="h-full flex flex-1 lg:flex-none absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                        <Link to="/">
                            <img src="/images/logo.png" alt="logo" className="h-full w-auto p-5 object-contain" />
                        </Link>
                    </div>
                    <ul className="relative group hidden lg:flex gap-8">
                        <li className="text-text hover:text-primary transition-all duration-300"><Link to="/">หน้าแรก</Link></li>
                        <li className="text-text hover:text-primary transition-all duration-300"><Link to={"/my-courses"}>คอร์สของฉัน</Link></li>
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