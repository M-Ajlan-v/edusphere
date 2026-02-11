import { CommonModule } from '@angular/common';
import { HttpClient, httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

import menuData from '../../../assets/menu.json';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  menuItems: any[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const role = this.auth.getRole();

    this.menuItems = menuData.filter(item =>
      item.roles.includes(role)
    );
  }
}