import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { of } from 'rxjs';
import { StudentsService } from './students.service';

fdescribe('StudentsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new StudentsService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return students', (done: DoneFn) => {
    const studentsMock = [
      { id: 0, firstName: "Mike",  lastName: "Myers", email: "mike.myers@gmail.com", course: "Angular", grade: 7 },
      { id: 1, firstName: "Eddie", lastName: "Murphy", email: "amigosdebestener@gmail.com", course: "Desarrollo Web", grade: 5 },
      { id: 2, firstName: "Cameron", lastName: "Díaz", email: "princesa.fiona@gmail.com", course: "Angular", grade: 10 },
      { id: 3, firstName: "John", lastName: "Lithgow", email: "thelord@gmail.com", course: "React", grade: 2 },
    ];

    httpClientSpy.get.and.returnValue(of(studentsMock));

    service.getStudents().subscribe((students) => {
      expect(students).toEqual(studentsMock);
      done();
    })
  });

  it('should return students table columns', (done: DoneFn) => {
    const studentsColumnsMock = ['fullname', 'email', 'course', 'grade', 'actions'];;

    httpClientSpy.get.and.returnValue(of(studentsColumnsMock));

    service.getStudentsTableColumns().subscribe((columns) => {
      expect(columns).toEqual(studentsColumnsMock);
      done();
    })
  });
});
