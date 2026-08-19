# StudySpace

StudySpace คือเว็บไซต์ตัวอย่างสำหรับค้นหาและเรียนคอร์สออนไลน์ ออกแบบให้ผู้ใช้เลือกดูคอร์ส เรียนตามบทเรียน และติดตามความคืบหน้าของตนเองได้ในหน้าเดียว

## ฟีเจอร์

- ค้นหาคอร์สจากชื่อหลักสูตร
- เลือกดูคอร์สตามหมวดหมู่
- ดูรายละเอียดคอร์ส ข้อมูลผู้สอน และรายการบทเรียน
- เรียนผ่านหน้าวิดีโอของแต่ละบทเรียน
- ทำเครื่องหมายบทเรียนที่เรียนจบแล้ว
- ดูคอร์สของฉันและเปอร์เซ็นต์ความคืบหน้า
- รองรับการใช้งานทั้งหน้าจอมือถือและเดสก์ท็อป

> ความคืบหน้าการเรียนบันทึกใน `localStorage` ของเบราว์เซอร์ จึงเป็นข้อมูลเฉพาะอุปกรณ์และเบราว์เซอร์ที่ใช้งาน

## Screenshots

### 🏠 Home

![Home](./screenshots/home.png)

### ℹ️ About

![About](./screenshots/about.png)

### 📚 Course Detail

![Course Detail](./screenshots/course-detail.png)

## เทคโนโลยีที่ใช้

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- daisyUI

## การใช้งาน API

โปรเจกต์นี้เชื่อมต่อกับ **Mock REST API (JSON Server)** เพื่อดึงข้อมูลคอร์สเรียนและหมวดหมู่ โดยเรียกข้อมูลผ่าน **Fetch API** จากเซิร์ฟเวอร์ที่รันบน `http://localhost:3005`

API ที่ใช้งานในโปรเจกต์

- `GET /courses` — ดึงรายการคอร์สทั้งหมด
- `GET /courses/:id` — ดึงรายละเอียดคอร์สตาม ID
- `GET /categories` — ดึงรายการหมวดหมู่ทั้งหมด
- `GET /categories/:category/courses` — ดึงรายการคอร์สตามหมวดหมู่

ข้อมูลจาก API ถูกนำมาใช้สำหรับ

- แสดงรายการคอร์สทั้งหมด
- ค้นหาคอร์สจากชื่อหลักสูตร
- กรองคอร์สตามหมวดหมู่
- แสดงรายละเอียดคอร์สและรายการบทเรียน

> โปรเจกต์นี้ใช้ Mock REST API ที่พัฒนาด้วย JSON Server เพื่อจำลองการทำงานของ Backend สำหรับการพัฒนาและทดสอบ Frontend
## เริ่มต้นใช้งาน

### สิ่งที่ต้องมี

- Node.js (แนะนำเวอร์ชัน LTS)
- npm

### ติดตั้ง dependencies

```bash
npm install
```

### เริ่ม development server

```bash
npm run dev
```

จากนั้นเปิด URL ที่แสดงในเทอร์มินัล โดยปกติคือ `http://localhost:5173`

## คำสั่งที่ใช้บ่อย

| คำสั่ง | รายละเอียด |
| --- | --- |
| `npm run dev` | เริ่ม development server |
| `npm run build` | ตรวจสอบ TypeScript และสร้าง production build |
| `npm run lint` | ตรวจสอบโค้ดด้วย Oxlint |
| `npm run preview` | เปิดดู production build ในเครื่อง |

## หน้าของเว็บไซต์

| URL | รายละเอียด |
| --- | --- |
| `/` | หน้าแรก แสดงคอร์ส ค้นหา และกรองตามหมวดหมู่ |
| `/my-courses` | หน้าแสดงคอร์สที่กำลังเรียนและความคืบหน้า |
| `/course/:id` | หน้ารายละเอียดคอร์ส |
| `/course/:courseId/lecture/:lectureId` | หน้าบทเรียนและวิดีโอ |
| `/about` | หน้าเกี่ยวกับ StudySpace |
| `/login` | หน้าเข้าสู่ระบบสำหรับการออกแบบ UI |

## โครงสร้างโปรเจกต์

```text
study-space/
├── public/
│   └── images/              # รูปภาพและไอคอน
├── src/
│   ├── api/                 # ฟังก์ชันเรียกข้อมูลคอร์ส
│   ├── components/          # UI components ที่ใช้ซ้ำ
│   ├── pages/               # หน้าต่าง ๆ ของเว็บไซต์
│   ├── types/               # TypeScript types
│   └── utils/               # ฟังก์ชันช่วยเหลือ
├── package.json
└── vite.config.ts
```
