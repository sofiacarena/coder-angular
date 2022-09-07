import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StudentsFormComponent } from './students-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { MaterialModule } from '../../../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('StudentsFormComponent', () => {
  let component: StudentsFormComponent;
  let fixture: ComponentFixture<StudentsFormComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsFormComponent ],
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }
       ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    const form = component.studentsForm;

    component.createForm();

    expect(form).toBeDefined();
  });

  it('should have form as invalid when only one required input is full', () => {
    const form = component.studentsForm;
    const name = form.controls['firstName'];

    name.setValue('Angular');

    expect(form.invalid).toBeTrue();
  });

  // it('should get ', () => {
  //   const form = component.studentsForm;
  //   const name = form.controls['firstName'];

  //   name.setValue('Angular');

  //   expect(form.invalid).toBeTrue();
  // });

  // getErrorMessage(field: string): string {
  //   if(this.studentsForm.controls[field].errors?.['required']) {
  //     return "El campo es requerido."
  //   }
  //   if(this.studentsForm.controls[field].errors?.['pattern']) {
  //     return "La puntuación debe ser numérica."
  //   }
  //   if(this.studentsForm.controls[field].errors?.['email']) {
  //     return "Formato inválido."
  //   }
  //   if(this.studentsForm.controls[field].errors?.['maxlength']) {
  //     let length = field === 'course' ? 20 : 50;
  //     return `Excediste el máximo de ${length} caracteres.`
  //   }
  //   return ""
  // }

  it('should have form as valid when all required inputs are full', () => {
    const form = component.studentsForm;

    form.patchValue({
      firstName: "Sofia",
      lastName: "Carena",
      email: "sof.car@gmail.com",
      course: "Angular",
      grade: 100,
    });

    expect(form.invalid).toBeFalse();
    expect(form.valid).toBeTrue();
  });

  it('should call onCancel method when cancel button is clicked', () => {
    const onCancelSpy = spyOn(component, "onCancel");

    const button = fixture.debugElement.query(By.css('.cancel-button'));
    button.nativeElement.click();
    fixture.detectChanges();

    expect(onCancelSpy).toHaveBeenCalled();
  });

  it('should call dialogRef close method with form value when onConfirm', () => {
    const form = component.studentsForm;
    form.patchValue({
      firstName: "Sofia",
      lastName: "Carena",
      email: "sof.car@gmail.com",
      course: "React",
      grade: 100,
    });
    const callMock = {
      id: undefined,
      ...form.value
    }

    component.onConfirm();

    expect(mockDialogRef.close).toHaveBeenCalledOnceWith(callMock);
  });
});
