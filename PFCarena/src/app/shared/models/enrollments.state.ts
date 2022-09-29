import { Enrollment } from "./enrollments.model";

export interface EnrollmentsState {
  loading: boolean;
  enrollments?: Enrollment[]
}
