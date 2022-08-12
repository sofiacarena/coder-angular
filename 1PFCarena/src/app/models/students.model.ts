export interface Student {
  firstName: string,
  lastName: string,
  email: string,
  course: string,
  grade: number
}

export const STUDENTS_DATA: Student[] = [
  { firstName: "Mike",  lastName: "Myers", email: "mike.myers@gmail.com", course: "Angular", grade: 7 },
  { firstName: "Eddie", lastName: "Murphy", email: "amigosdebestener@gmail.com", course: "Desarrollo Web", grade: 5 },
  { firstName: "Cameron", lastName: "Díaz", email: "princesa.fiona@gmail.com", course: "Angular", grade: 10 },
  { firstName: "John", lastName: "Lithgow", email: "thelord@gmail.com", course: "React", grade: 2 },
  { firstName: "Conrad", lastName: "Vernon", email: "conocesapinpon@gmail.com", course: "Angular", grade: 9 },
  { firstName: "Antonio", lastName: "Banderas", email: "boladepelos@gmail.com", course: "Desarrollo Web", grade: 8 },
  { firstName: "Rupert", lastName: "Everett", email: "encantador.everett@gmail.com", course: "React", grade: 3 },
  { firstName: "Vincent", lastName: "Cassel", email: "hoodcassel@gmail.com", course: "Angular", grade: 9 },
  { firstName: "Chris", lastName: "Miller", email: "espejitoespejito@gmail.com", course: "Angular", grade: 7 },
  { firstName: "Julie", lastName: "Andrews", email: "reinaza@gmail.com", course: "Angular", grade: 6 },
  { firstName: "John", lastName: "Cleese", email: "reyharold123@gmail.com", course: "Desarrollo Web", grade: 4 },
  { firstName: "Jennifer", lastName: "Saunders", email: "ineedahero@gmail.com", course: "React", grade: 3 },
]
