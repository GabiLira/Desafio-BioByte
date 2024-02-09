import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to '/home' when the path is empty
    { path: 'home', component: CadastroComponent },
];
