import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-solucoes',
  standalone: true,
  imports: [ImageModule, RouterModule, CarouselModule],
  templateUrl: './solucoes.component.html',
  styleUrl: './solucoes.component.scss'
})
export class SolucoesComponent implements OnInit {

  servicos: any[] = []

  responsiveOptions: any[] | undefined = [];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.servicos = [
      { name: 'Churasqueira' , image: "./../../../assets/images/artistas/vh.jpg"},
      { name: 'Churasqueira' , image: "./../../../assets/images/artistas/vh.jpg"},
      { name: 'Churasqueira' , image: "./../../../assets/images/artistas/vh.jpg"},
      { name: 'Churasqueira' , image: "./../../../assets/images/artistas/vh.jpg"},
      { name: 'Churasqueira' , image: "./../../../assets/images/artistas/vh.jpg"},
      { name: 'Churasqueira' , image: "./../../../assets/images/artistas/vh.jpg"}
    ]
  }

}
