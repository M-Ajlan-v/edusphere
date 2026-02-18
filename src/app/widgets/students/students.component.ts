import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { Parent } from '../../models/parent.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})

export class StudentsComponent implements OnInit {

  students: Student[] = [];
  parents: Parent[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.students = this.storageService.getStudents();
    this.parents = this.storageService.getParents();
  }

  getParentName(parentId: number): string {
    const parent = this.parents.find(p => p.id === parentId);
    return parent ? parent.name : 'Unknown';
  }
}