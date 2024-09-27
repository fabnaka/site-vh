import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solucoes',
  standalone: true,
  imports: [ImageModule, RouterModule],
  templateUrl: './solucoes.component.html',
  styleUrl: './solucoes.component.scss'
})
export class SolucoesComponent {

}
