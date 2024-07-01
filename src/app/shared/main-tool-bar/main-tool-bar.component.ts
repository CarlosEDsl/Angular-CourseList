import { Component } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';


@Component({
  selector: 'app-main-tool-bar',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './main-tool-bar.component.html',
  styleUrl: './main-tool-bar.component.scss'
})
export class MainToolBarComponent {

}
