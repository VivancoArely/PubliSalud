import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nosotros } from './components/nosotros/nosotros';
import { Productos } from './components/productos/productos';
import { Contacto } from './components/contacto/contacto';

import   {Inicio} from  './components/inicio/inicio';
const routes: Routes = [
   { path: '', redirectTo: '/inicio', pathMatch: 'full' },
   { path: 'inicio', component: Inicio},
   { path: 'productos', component: Productos },
   { path: 'nosotros', component: Nosotros },
   { path: 'contacto', component: Contacto }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled' // 👈 esto hace scroll al top
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
