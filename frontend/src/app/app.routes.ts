import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CriarComponent } from './components/criar-component/criar-component';
import { ListarComponent } from './components/listar-component/listar-component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'criar',
        component: CriarComponent,
        title: 'Criar Nota'
    },
    {
        path: 'listar',
        component: ListarComponent,
        title: 'Listar Nota'
    },
    {
        path: 'editar/:id',
        component: CriarComponent,
        title: 'Editar Nota'
    }
];
