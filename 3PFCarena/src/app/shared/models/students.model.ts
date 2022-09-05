export interface Student {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  course: string,
  grade: number
}

export const STUDENTS_DATA: Student[] = [
  { id: 0, firstName: "Mike",  lastName: "Myers", email: "mike.myers@gmail.com", course: "Angular", grade: 7 },
  { id: 1, firstName: "Eddie", lastName: "Murphy", email: "amigosdebestener@gmail.com", course: "Desarrollo Web", grade: 5 },
  { id: 2, firstName: "Cameron", lastName: "Díaz", email: "princesa.fiona@gmail.com", course: "Angular", grade: 10 },
  { id: 3, firstName: "John", lastName: "Lithgow", email: "thelord@gmail.com", course: "React", grade: 2 },
  { id: 4, firstName: "Conrad", lastName: "Vernon", email: "conocesapinpon@gmail.com", course: "Angular", grade: 9 },
  { id: 5, firstName: "Antonio", lastName: "Banderas", email: "boladepelos@gmail.com", course: "Desarrollo Web", grade: 8 },
  { id: 6, firstName: "Rupert", lastName: "Everett", email: "encantador.everett@gmail.com", course: "React", grade: 3 },
  { id: 7, firstName: "Vincent", lastName: "Cassel", email: "hoodcassel@gmail.com", course: "Angular", grade: 9 },
  { id: 8, firstName: "Chris", lastName: "Miller", email: "espejitoespejito@gmail.com", course: "Angular", grade: 7 },
  { id: 9, firstName: "Julie", lastName: "Andrews", email: "reinaza@gmail.com", course: "Angular", grade: 6 },
  { id: 10, firstName: "John", lastName: "Cleese", email: "reyharold123@gmail.com", course: "Desarrollo Web", grade: 4 },
  { id: 11, firstName: "Jennifer", lastName: "Saunders", email: "ineedahero@gmail.com", course: "React", grade: 3 },
]

export const STUDENTS_COLUMNS: string[] = ['fullname', 'email', 'course', 'grade', 'actions'];
