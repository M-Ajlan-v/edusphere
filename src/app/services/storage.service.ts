import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student.model';  // Adjust path to interface

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private key = 'students';
  private studentsSubject = new BehaviorSubject<Student[]>([]);

  constructor() {
    this.loadStudents();
  }

  getStudents(): Student[] {
    return this.studentsSubject.value;
  }

  getStudents$() {
    return this.studentsSubject.asObservable();
  }

  addStudent(student: Student): void {
    const students = [...this.studentsSubject.value, student];
    this.saveStudents(students);
  }

  deleteStudent(index: number): void {
    const students = [...this.studentsSubject.value];
    students.splice(index, 1);
    this.saveStudents(students);
  }

  private loadStudents(): void {
    try {
      const data = localStorage.getItem(this.key);
      const students: Student[] = data ? JSON.parse(data) : [];
      this.studentsSubject.next(students);
    } catch (e) {
      console.error('Load error:', e);
      this.studentsSubject.next([]);
    }
  }

  private saveStudents(students: Student[]): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(students));
      this.studentsSubject.next(students);
    } catch (e) {
      console.error('Save error:', e);
    }
  }
}
