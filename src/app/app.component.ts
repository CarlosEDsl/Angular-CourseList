import { SharedModule } from './shared/shared.module';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainToolBarComponent } from './shared/main-tool-bar/main-tool-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
