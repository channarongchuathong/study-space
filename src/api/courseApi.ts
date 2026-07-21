

export async function getCourses() {
    const response = await fetch("http://localhost:3005/courses")
    const data = await response.json()
    return data
}