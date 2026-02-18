import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Parent } from '../../models/parent.model';
import { Student } from '../../models/student.model';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent implements OnInit {

  admissionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.admissionForm = this.fb.group({
      student: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        class: ['', Validators.required],
        address: ['', Validators.required]
      }),
      parent: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
      })
    });
  }

  // Helper method for validation
  isInvalid(groupName: string, controlName: string): boolean {
    const control = this.admissionForm.get(`${groupName}.${controlName}`);
    return !!(control && control.touched && control.invalid);
  }

  onSubmit(): void {

    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched();
      return;
    }

    const studentData = this.admissionForm.value.student;
    const parentData = this.admissionForm.value.parent;

    let existingParent = this.storageService.findParentByEmail(parentData.email);
    let parentId: number;

    if (existingParent) {
      parentId = existingParent.id;
    } else {
      parentId = Date.now();

      const newParent: Parent = {
        id: parentId,
        name: parentData.name,
        email: parentData.email,
        phone: parentData.phone,
        studentIds: []
      };

      this.storageService.addParent(newParent);
    }

    const studentId = Date.now() + 1;

    const newStudent: Student = {
      id: studentId,
      name: studentData.name,
      dob: studentData.dob,
      gender: studentData.gender,
      class: studentData.class,
      address: studentData.address,
      parentId: parentId
    };

    this.storageService.addStudent(newStudent);

    const parentToUpdate = this.storageService.findParentByEmail(parentData.email);
    if (parentToUpdate) {
      parentToUpdate.studentIds.push(studentId);
      this.storageService.updateParent(parentToUpdate);
    }

    this.admissionForm.reset();
    alert('Admission successful!');
  }
}
