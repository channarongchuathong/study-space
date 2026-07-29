

export async function getCourseById(id: string) {
    const response = await fetch(`http://localhost:3005/courses/${id}`)
    const data = await response.json()
    return data
}