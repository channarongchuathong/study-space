
import type { CourseDetail } from "../types/Course"


export function getTotalDuration(courseDetails: CourseDetail[]) {
  const totalMinutes = courseDetails.reduce((total, lecture) => {
    return total + parseInt(lecture.duration)
  }, 0)

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours > 0) {
    return minutes > 0
      ? `${hours} ชม. ${minutes} นาที`
      : `${hours} ชม.`
  }

  return `${minutes} นาที`
}