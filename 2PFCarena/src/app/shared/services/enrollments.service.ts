import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { ENROLLMENTS_DATA, ENROLLMENTS_COLUMNS } from '../models/enrollments.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  enrollments = ENROLLMENTS_DATA;
  columns = ENROLLMENTS_COLUMNS;

  constructor() { }

  getEnrollments() {
    return from(this.enrollments);
  }

  getEnrollmentsTableColumns() {
    return of(this.columns);
  }
}
