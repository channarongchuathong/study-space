import { Link } from "react-router"

function Login() {
    return (
        <div className="bg-background text-text min-h-screen flex w-full h-full justify-center items-center p-8 lg:p-0">
            <div className="flex flex-col w-150 rounded-xl border border-border bg-surface">
                <div className="flex px-4 pt-4">
                    <Link to={"/"}>
                        <div className="text-muted text-xs lg:text-sm flex gap-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </div>
                            <p className="hidden lg:block">กลับไปหน้าแรก</p>
                        </div>
                    </Link>
                </div>
                <div className="p-10 w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl lg:text-4xl font-bold">เข้าสู่ระบบ</h1>
                        <p className="text-sm lg:text-base">ยินดีต้อนรับกลับมา</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm lg:text-base">
                        <div className="flex flex-col gap-2">
                            <div>อีเมล</div>
                            <div className="relative">
                                <input type="email" placeholder="กรอกอีเมลของคุณ" className="w-full border border-border rounded-lg h-12 px-12" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-muted absolute left-3 top-1/2 -translate-y-1/2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>รหัสผ่าน</div>
                            <div className="relative">
                                <input type="password" placeholder="กรอกรหัสผ่านของคุณ" className="w-full border border-border rounded-lg h-12 px-12" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-muted absolute top-1/2 left-3 -translate-y-1/2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" className="checkbox bg-transparent w-5 h-5 border border-border rounded-md" />
                                จดจำฉันไว้
                            </div>
                            <p className="text-primary">ลืมรหัสผ่าน?</p>
                        </div>
                    </div>
                    <button className="w-full text-text text-sm lg:text-base rounded-lg bg-primary border-border px-3 py-2 hover:cursor-pointer hover:bg-primary/80 transition-all">เข้าสู่ระบบ</button>
                    <div className="flex items-center gap-3">
                        <div className="flex-1 bg-border h-0.5"></div>
                        <div className="text-sm lg:text-base">หรือเข้าสู่ระบบด้วย</div>
                        <div className="flex-1 bg-border h-0.5"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="btn bg-white font-normal text-black border-[#e5e5e5] rounded-lg">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            ดำเนินการต่อด้วย Google
                        </button>
                        <button className="btn bg-[#1A77F2] font-normal text-white border-[#005fd8] rounded-lg">
                            <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                            ดำเนินการต่อด้วย Facebook
                        </button>
                        <button className="btn bg-black font-normal text-white border-black rounded-lg">
                            <svg aria-label="Apple logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1195"><path fill="white" d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"></path></svg>
                            ดำเนินการต่อด้วย Apple
                        </button>
                    </div>
                    <div className="flex gap-5 justify-center">
                        <p>ยังไม่มีบัญชี?</p>
                        <p className="text-primary">สมัครสมาชิก</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login