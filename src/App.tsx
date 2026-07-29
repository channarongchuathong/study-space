import CourseDetail from "./pages/CourseDetail"
import Home from "./pages/Home"
import { Routes, Route } from "react-router"
import LecturePage from "./pages/LecturePage"
import Login from "./pages/Login"
import About from "./pages/About"
import MyCourses from "./pages/MyCourses"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/my-courses" element={<MyCourses />}></Route>
        <Route path="/course/:id" element={<CourseDetail />}></Route>
        <Route path="/course/:courseId/lecture/:lectureId" element={<LecturePage />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>

  )
}

export default App
