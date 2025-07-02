import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-appbar',
  imports: [MatToolbarModule , MatInputModule , MatIconModule],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.css'
})
export class AppbarComponent {

}
