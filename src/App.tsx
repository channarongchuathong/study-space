import CourseDetail from "./pages/CourseDetail"
import Home from "./pages/Home"
import { Routes, Route } from "react-router"
import LecturePage from "./pages/LecturePage"
import Login from "./pages/Login"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<CourseDetail />}></Route>
        <Route path="/course/learn" element={<LecturePage />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>

  )
}

export default App
