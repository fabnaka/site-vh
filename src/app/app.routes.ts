import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolucoesComponent } from './pages/solucoes/solucoes.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artistas', component: ArtistasComponent },
    { path: 'solucoes', component: SolucoesComponent },
    { path: 'sobre', component: SobreComponent },
];
