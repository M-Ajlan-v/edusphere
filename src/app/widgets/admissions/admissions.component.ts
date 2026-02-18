import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Parent } from '../../models/parent.model';
import { Student } from '../../models/student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css',
})
export class AdmissionsComponent {
  admissionForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.admissionForm = this.fb.group({
      student: this.fb.group({
        name: ['', Validators.required],
        class: ['', Validators.required],
        section: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        gender: ['Male', Validators.required],
        admissionDate: ['', Validators.required],
        address: ['', Validators.required],
      }),
      parent: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        address: ['', Validators.required],
      }),
    });
  }
submitAdmission() {
  if (this.admissionForm.invalid) {
    this.admissionForm.markAllAsTouched(); 
    return;
  }




    const formValue = this.admissionForm.value;

    const parentId = Date.now().toString();
    const studentId = (Date.now() + 1).toString();

    const parent: Parent = {
      id: parentId,
      ...formValue.parent,
      studentIds: [studentId],
      createdAt: new Date().toISOString(),
    };

    const student: Student = {
      id: studentId,
      ...formValue.student,
      parentId: parentId,
      createdAt: new Date().toISOString(),
    };

    const parents = JSON.parse(localStorage.getItem('parents') || '[]');
    const students = JSON.parse(localStorage.getItem('students') || '[]');

    parents.push(parent);
    students.push(student);

    localStorage.setItem('parents', JSON.stringify(parents));
    localStorage.setItem('students', JSON.stringify(students));

    alert('Admission Successful ✅');

    this.admissionForm.reset();
  }
}
