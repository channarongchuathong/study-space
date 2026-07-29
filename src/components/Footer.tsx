

function Footer() {
    return (
        <div className='bg-surface border border-border'>
            <div className='container mx-auto'>
                <footer className="footer sm:footer-horizontal bg-base-200 text-text p-10">
                    <aside>
                        <img src="/images/logo.png" alt="logo" className="w-30"/>
                        <p>
                            Study Space
                            <br />
                            พื้นที่สำหรับการเรียนรู้ที่ออกแบบมา
                             <br />
                             เพื่อให้คุณพัฒนาตัวเองได้ในแบบของคุณ
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">หลักสูตร</h6>
                        <a className="link link-hover">Programming</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Data Science</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">เกี่ยวกับเรา</h6>
                        <a className="link link-hover">เกี่ยวกับ StudySpace</a>
                        <a className="link link-hover">ติดต่อเรา</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">ติดต่อเรา</h6>
                        <a className="link link-hover">hello@studyspace.com</a>
                        <a className="link link-hover">02-123-456</a>
                        <a className="link link-hover">ที่อยู่ 123/123</a>
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default Footer