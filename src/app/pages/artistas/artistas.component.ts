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
    { id: 1, nome: "VH", foto: "./../../../assets/images/artistas/vh.jpg" },
    { id: 2, nome: "PEDRO CORREA", foto: "./../../../assets/images/artistas/vh.jpg" },
    { id: 3, nome: "KAROL ALONSO", foto: "./../../../assets/images/artistas/vh.jpg" },
    { id: 4, nome: "PADOVA", foto: "./../../../assets/images/artistas/vh.jpg" },
    { id: 5, nome: "LOREN", foto: "./../../../assets/images/artistas/vh.jpg" },
    { id: 6, nome: "KRONE", foto: "./../../../assets/images/artistas/vh.jpg" },
    { id: 7, nome: "GNESIS", foto: "./../../../assets/images/artistas/vh.jpg" },
    { id: 8, nome: "JAY JENNER", foto: "./../../../assets/images/artistas/vh.jpg" },
    { id: 9, nome: "IRIS", foto: "./../../../assets/images/artistas/vh.jpg" }
  ];

}
