import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolucoesComponent } from './pages/solucoes/solucoes.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { ArtistasPerfilComponent } from './pages/artistas-perfil/artistas-perfil.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'artistas', component: ArtistasComponent },
    { path: 'artistas/:id', component: ArtistasPerfilComponent },
    { path: 'solucoes', component: SolucoesComponent },
    { path: 'sobre', component: SobreComponent },
];
