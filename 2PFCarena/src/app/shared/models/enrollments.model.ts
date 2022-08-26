export interface Enrollment {
  id: number,
  code: number,
  course: string,
  classCode: number,
  student: string,
}

export const ENROLLMENTS_DATA: Enrollment[] = [
  { id: 0, code: 3222, course: "Angular",  classCode: 30000, student: "Mike Myers" },
  { id: 1, code: 3222, course: "Angular",  classCode: 30055, student: "Eddie Murphy" },
  { id: 2, code: 3222, course: "Desarrollo Web",  classCode: 10898, student: "Mike Myers" },
  { id: 3, code: 3222, course: "React",  classCode: 26667, student: "Mike Myers" },
  { id: 4, code: 3222, course: "Angular",  classCode: 30055, student: "Cameron Díaz" },
  { id: 5, code: 3222, course: "React",  classCode: 26667, student: "Jennifer Saunders" },
  { id: 6, code: 3222, course: "Angular",  classCode: 30055, student: "John Lithgow" },
  { id: 7, code: 3222, course: "Angular",  classCode: 30000, student: "Rupert Everett" },
  { id: 8, code: 3222, course: "Desarrollo Web",  classCode: 10898, student: "Eddie Murphy" },
  { id: 9, code: 3222, course: "Angular",  classCode: 30055, student: "Antonio Banderas" },
  { id: 10, code: 3222, course: "React",  classCode: 26667, student: "Cameron Díaz" },
  { id: 11, code: 3222, course: "Desarrollo Web",  classCode: 10898, student: "Cameron Díaz" }
]

export const ENROLLMENTS_COLUMNS: string[] = ['student', 'course', 'classCode', 'actions'];
