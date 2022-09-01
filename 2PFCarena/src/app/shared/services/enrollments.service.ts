import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Enrollment, ENROLLMENTS_COLUMNS } from '../models/enrollments.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  columns = ENROLLMENTS_COLUMNS;
  readonly ENROLLMENTS_URL = 'https://6310ece919eb631f9d6976a5.mockapi.io/api/enrollments/';

  constructor(private http: HttpClient) { }

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.ENROLLMENTS_URL);
  }

  getEnrollmentsTableColumns() {
    return of(this.columns);
  }

  addEnrollment(enrollment: Enrollment) {
    return this.http.post(this.ENROLLMENTS_URL, enrollment);
  }

  editEnrollment(enrollment: Enrollment) {
    return this.http.put(this.ENROLLMENTS_URL + enrollment.id, enrollment);
  }

  deleteEnrollment(id: number) {
    return this.http.delete(this.ENROLLMENTS_URL + id);
  }
}
