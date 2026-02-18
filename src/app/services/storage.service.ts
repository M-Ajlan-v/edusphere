import { Injectable } from '@angular/core';
import { Parent } from '../models/parent.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private parentsKey = 'parents';
  private studentsKey = 'students';

  // -------------------- PARENTS --------------------

  getParents(): Parent[] {
    const data = localStorage.getItem(this.parentsKey);
    return data ? JSON.parse(data) : [];
  }

  private saveParents(parents: Parent[]): void {
    localStorage.setItem(this.parentsKey, JSON.stringify(parents));
  }

  addParent(parent: Parent): void {
    const parents = this.getParents();
    parents.push(parent);
    this.saveParents(parents);
  }

  findParentByEmail(email: string): Parent | undefined {
    const parents = this.getParents();
    return parents.find(p => p.email === email);
  }

  updateParent(updatedParent: Parent): void {
    const parents = this.getParents();
    const index = parents.findIndex(p => p.id === updatedParent.id);

    if (index !== -1) {
      parents[index] = updatedParent;
      this.saveParents(parents);
    }
  }


  getStudents(): Student[] {
    const data = localStorage.getItem(this.studentsKey);
    return data ? JSON.parse(data) : [];
  }

  private saveStudents(students: Student[]): void {
    localStorage.setItem(this.studentsKey, JSON.stringify(students));
  }

  addStudent(student: Student): void {
    const students = this.getStudents();
    students.push(student);
    this.saveStudents(students);
  }
}