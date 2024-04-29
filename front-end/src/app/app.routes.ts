import { Routes } from '@angular/router';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { ContasComponent } from './paginas/contas/contas.component';

export const routes: Routes = [
    {path:'inicial', component:InicialComponent},
    {path:'contas', component:ContasComponent},
    {path:'', redirectTo:'/inicial', pathMatch:'full'}
];
