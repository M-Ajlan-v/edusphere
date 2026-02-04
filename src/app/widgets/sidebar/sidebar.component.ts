import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
