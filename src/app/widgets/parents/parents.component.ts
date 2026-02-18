import { Component } from '@angular/core';
import { CommonModule }  from '@angular/common';

@Component({
  selector: 'app-parents',
  imports: [],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {
   parents: any[] = [];

  ngOnInit() {
    this.loadParents();
  }

  loadParents() {
    this.parents = JSON.parse(localStorage.getItem('parents') || '[]');
  }

}
