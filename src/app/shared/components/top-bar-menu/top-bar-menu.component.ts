import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-top-bar-menu',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RippleModule],
  templateUrl: './top-bar-menu.component.html',
  styleUrl: './top-bar-menu.component.scss',
})
export class TopBarMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Artistas',
        icon: 'pi pi-star'
      },
      {
        label: 'Soluções',
        icon: 'pi pi-search'
      },
      {
        label: 'Sobre',
        icon: 'pi pi-envelope'
      },
    ];
  }

}
