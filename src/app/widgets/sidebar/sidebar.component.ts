import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

import menuData from '../../../assets/menu.json';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuItems = menuData;

}
