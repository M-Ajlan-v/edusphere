import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, FooterComponent, SidebarComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
