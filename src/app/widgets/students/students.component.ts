import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';
import { Student } from '../../models/student.model';  // Adjust path

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit, OnDestroy {
  // students: Student[] = [];
  students: any[] = [];

  private subscription?: Subscription;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.subscription = this.storageService.getStudents$().subscribe(
      students => {
        this.students = students;
        console.log('Students updated:', this.students.length);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  deleteStudent(index: number): void {
    this.storageService.deleteStudent(index);
  }
}
