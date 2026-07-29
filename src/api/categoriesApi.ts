

export async function getCategories() {
    const response = await fetch("http://localhost:3005/categories")
    const data = await response.json()
    return data
}

export async function getCoursesByCategory(category: string) {
  const response = await fetch(
    `http://localhost:3005/categories/${category}/courses`
  );

  const data = await response.json();
  return data;
}