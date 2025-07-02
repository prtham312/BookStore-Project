import { Component } from '@angular/core';
import { AppbarComponent } from "../../components/appbar/appbar.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [AppbarComponent , RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
