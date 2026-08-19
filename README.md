# StudySpace

เว็บแพลตฟอร์มตัวอย่างสำหรับค้นหาและเรียนคอร์สออนไลน์ พัฒนาด้วย React และ TypeScript โดยแสดงรายละเอียดคอร์ส วิดีโอบทเรียน และติดตามความคืบหน้าการเรียนภายในเบราว์เซอร์

## ฟีเจอร์

- แสดงรายการคอร์สและค้นหาตามชื่อคอร์ส
- กรองคอร์สตามหมวดหมู่
- ดูรายละเอียดคอร์ส รายการบทเรียน และข้อมูลผู้สอน
- เรียนผ่านหน้าวิดีโอและทำเครื่องหมายว่าเรียนจบบทเรียนแล้ว
- แสดงคอร์สที่กำลังเรียนพร้อมเปอร์เซ็นต์ความคืบหน้า
- หน้าเกี่ยวกับเราและหน้าเข้าสู่ระบบสำหรับการออกแบบ UI
- รองรับการแสดงผลบนมือถือและเดสก์ท็อป

> ความคืบหน้าการเรียนเก็บไว้ที่ `localStorage` ของเบราว์เซอร์ในคีย์ `completedLessons` จึงเป็นข้อมูลเฉพาะเครื่องและเบราว์เซอร์ที่ใช้งาน

## เทคโนโลยี

- React 19 + TypeScript
- Vite
- React Router
- Tailwind CSS + daisyUI
- json-server สำหรับ Mock API

## เริ่มต้นใช้งาน

### สิ่งที่ต้องมี

- Node.js (แนะนำรุ่น LTS)
- npm

### 1. ติดตั้ง dependencies ของเว็บ

```bash
npm install
```

### 2. ติดตั้ง dependencies ของ Mock API

```bash
cd courses-mock-api
npm install
cd ..
```

### 3. เริ่ม Mock API

เปิดเทอร์มินัลแรกที่โฟลเดอร์โปรเจกต์ แล้วรัน

```bash
cd courses-mock-api
npm start
```

Mock API จะทำงานที่ `http://localhost:3005`

### 4. เริ่มเว็บแอป

เปิดเทอร์มินัลอีกหน้าที่โฟลเดอร์โปรเจกต์ แล้วรัน

```bash
npm run dev
```

จากนั้นเปิด URL ที่ Vite แสดงในเทอร์มินัล (โดยปกติคือ `http://localhost:5173`)

## คำสั่งที่ใช้บ่อย

| คำสั่ง | หน้าที่ |
| --- | --- |
| `npm run dev` | เริ่ม development server ของเว็บแอป |
| `npm run build` | ตรวจสอบ TypeScript และสร้างไฟล์ production build |
| `npm run lint` | ตรวจสอบโค้ดด้วย Oxlint |
| `npm run preview` | ดู production build ในเครื่อง |
| `cd courses-mock-api && npm start` | เริ่ม Mock API ที่พอร์ต 3005 |

## เส้นทางหน้าเว็บ

| URL | รายละเอียด |
| --- | --- |
| `/` | หน้าแรก รายการคอร์ส การค้นหา และตัวกรองหมวดหมู่ |
| `/my-courses` | คอร์สที่เริ่มเรียนและความคืบหน้า |
| `/course/:id` | รายละเอียดคอร์ส |
| `/course/:courseId/lecture/:lectureId` | หน้าวิดีโอของบทเรียน |
| `/about` | หน้าเกี่ยวกับ StudySpace |
| `/login` | หน้าเข้าสู่ระบบ (เฉพาะ UI ยังไม่เชื่อมระบบยืนยันตัวตน) |

## Mock API

ข้อมูลตัวอย่างอยู่ที่ `courses-mock-api/db.json` และ API มี endpoints ดังนี้

| Method | Endpoint | รายละเอียด |
| --- | --- | --- |
| `GET` | `/courses` | ดึงคอร์สทั้งหมด |
| `GET` | `/courses/:id` | ดึงคอร์สตาม ID |
| `GET` | `/categories` | ดึงหมวดหมู่ทั้งหมด |
| `GET` | `/categories/:category/courses` | ดึงคอร์สตามหมวดหมู่ |

ตัวอย่าง:

```bash
curl http://localhost:3005/courses
```

## โครงสร้างโปรเจกต์

```text
study-space/
├── src/
│   ├── api/                 # ฟังก์ชันเรียก Mock API
│   ├── components/          # UI components ที่ใช้ซ้ำ
│   ├── pages/               # หน้าต่าง ๆ ของแอป
│   ├── types/               # TypeScript types
│   └── utils/               # ฟังก์ชันช่วยเหลือ
├── public/images/           # รูปและไอคอน
└── courses-mock-api/        # เซิร์ฟเวอร์และข้อมูล Mock API
```

## หมายเหตุ

เว็บแอปเรียกข้อมูลจาก `http://localhost:3005` โดยตรง ดังนั้นต้องเปิด Mock API ก่อนใช้งานหน้าเว็บที่เกี่ยวข้องกับคอร์ส
