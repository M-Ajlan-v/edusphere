import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { Parent } from '../../models/parent.model';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent implements OnInit {

  parents: Parent[] = [];
  students: Student[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.parents = this.storageService.getParents();
    this.students = this.storageService.getStudents();
  }

  getStudentsByParent(parentId: number): Student[] {
    return this.students.filter(s => s.parentId === parentId);
  }
}
