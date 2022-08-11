import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/students.module';

@Pipe({
  name: 'fullnameUppercase'
})
export class FullnameUppercasePipe implements PipeTransform {

  transform(student: Student): string {
    let fullnameUppercase = `${student.firstName} ${student.lastName.toUpperCase()}`;
    return fullnameUppercase;
  }

}
