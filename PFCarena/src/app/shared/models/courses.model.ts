export interface Course {
  id: number,
  code: number,
  name: string,
  teacher: string,
  students: number,
  classCode: number,
}

export const COURSES_DATA: Course[] = [
  { id: 0, code: 30111, name: "Angular", teacher: "Craig T. Nelson", students: 65, classCode: 30201 },
]

export const COURSES_COLUMNS: string[] = ['name', 'teacher', 'students', 'classCode', 'actions'];
