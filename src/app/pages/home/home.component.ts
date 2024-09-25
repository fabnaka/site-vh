import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, GalleriaModule, ImageModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  responsiveOptions: any[] | undefined;

  images: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        name: 'PRIVADOS',
        image: '1.jpg',
      },
      {
        name: 'CORPORATIVOS',
        image: '2.jpg',
      },
      {
        name: 'LABELS/BARES/BALADAS/EVENTUAIS',
        image: '1.jpg',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.images = [{itemImageSrc: './../../../assets/images/home-carrosel/3.jpg'}, {itemImageSrc: './../../../assets/images/home-carrosel/2.jpg'}]
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return;
  }
}
