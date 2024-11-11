import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-top-bar-menu',
  standalone: true,
  imports: [MenubarModule, ButtonModule, RippleModule , CommonModule],
  templateUrl: './top-bar-menu.component.html',
  styleUrl: './top-bar-menu.component.scss',
})
export class TopBarMenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  isScrolled: boolean = false;
  isMobile: boolean = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 610 ? true : false
    }
    
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/home',
      },
      {
        label: 'Soluções',
        icon: 'pi pi-search',
        route: '/solucoes',
      },
      {
        label: 'Artistas',
        icon: 'pi pi-star',
        route: '/artistas',
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
    this.isScrolled =  window.scrollY > 0 ? true : false
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 610 ? true : false 
  }

  get dynamicClass() {
    return this.isScrolled ? 'nav-bar-not-transparent' : 'nav-bar-transparent';
  }
}
