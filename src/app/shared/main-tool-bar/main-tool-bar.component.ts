import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-main-tool-bar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './main-tool-bar.component.html',
  styleUrl: './main-tool-bar.component.scss'
})
export class MainToolBarComponent {

}
