import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admissions.component.html'
})
export class AdmissionsComponent {

  admissionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private router: Router
  ) {

    this.admissionForm = this.fb.group({
      student: this.fb.group({
        name: ['', Validators.required],
        class: ['', Validators.required],
        section: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        gender: ['', Validators.required],
        admissionDate: ['', Validators.required],
        address: ['', Validators.required]
      }),
      parent: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        address: ['', Validators.required]
      })
    });
  }


  get studentGroup(): FormGroup {
    return this.admissionForm.get('student') as FormGroup;
  }

  get parentGroup(): FormGroup {
    return this.admissionForm.get('parent') as FormGroup;
  }

  submitAdmission() {

    if (this.admissionForm.invalid) {
      this.admissionForm.markAllAsTouched();
      return;
    }

    const newAdmission = JSON.parse(JSON.stringify(this.admissionForm.value));

    this.storageService.addStudent(newAdmission);

    alert('Admission Submitted Successfully');

    this.admissionForm.reset();

    this.router.navigate(['/students']);
  }
}
