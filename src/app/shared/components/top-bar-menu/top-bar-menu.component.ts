import { Component, HostListener, OnInit } from '@angular/core';
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
  menuScrolled: boolean = false;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/home',
      },
      {
        label: 'Artistas',
        icon: 'pi pi-star',
        route: '/artistas',
      },
      {
        label: 'Soluções',
        icon: 'pi pi-search',
        route: '/solucoes',
      },
      {
        label: 'Sobre',
        icon: 'pi pi-envelope',
        route: '/sobre',
      },
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.menuScrolled = window.scrollY > 0;
  }
}
