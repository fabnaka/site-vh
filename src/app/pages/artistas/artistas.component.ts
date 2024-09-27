import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [CommonModule, CardModule, ImageModule],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.scss'
})
export class ArtistasComponent {

  artistas_array: any[] = [
    { nome: "VH", foto: "./../../../assets/images/artistas/vh.jpg" },
    { nome: "PEDRO CORREA", foto: "./../../../assets/images/artistas/vh.jpg" },
    { nome: "KAROL ALONSO", foto: "./../../../assets/images/artistas/vh.jpg" },
    { nome: "PADOVA", foto: "./../../../assets/images/artistas/vh.jpg" },
    { nome: "LOREN", foto: "./../../../assets/images/artistas/vh.jpg" },
    { nome: "KRONE", foto: "./../../../assets/images/artistas/vh.jpg" },
    { nome: "GNESIS", foto: "./../../../assets/images/artistas/vh.jpg" },
    { nome: "JAY JENNER", foto: "./../../../assets/images/artistas/vh.jpg" },
    { nome: "IRIS", foto: "./../../../assets/images/artistas/vh.jpg" }
  ];

}
