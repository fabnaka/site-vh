import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarMenuComponent } from './shared/components/top-bar-menu/top-bar-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TopBarMenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'site-vh';
}
