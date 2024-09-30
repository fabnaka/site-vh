import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-artistas-perfil',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './artistas-perfil.component.html',
  styleUrl: './artistas-perfil.component.scss'
})
export class ArtistasPerfilComponent {

}
