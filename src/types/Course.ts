export type Course = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  coursesDtl: CourseDetail[];
}

export type CourseDetail = {
  id: string;
  title: string;
  duration: string;
}