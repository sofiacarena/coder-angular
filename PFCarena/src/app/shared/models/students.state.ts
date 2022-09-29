import { Student } from './students.model';

export interface StudentsState {
  loading: boolean;
  students?: Student[];
}
