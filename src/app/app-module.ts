import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './components/nav/app';
import { Inicio } from './components/inicio/inicio';
import { Carousel } from './components/carousel/carousel';
import { Contacto } from './components/contacto/contacto';
import { Counter } from './components/counter/counter';
import { Footer } from './components/footer/footer';
import { Historia } from './components/historia/historia';
import { Mision } from './components/mision/mision';
import { Nosotros } from './components/nosotros/nosotros';
import { Productos } from './components/productos/productos';
import { Elegir } from './components/elegir/elegir';
import { Equiposlider } from './components/equiposlider/equiposlider';
import { Catalogo } from './components/catalogo/catalogo';
import { EquiposBR } from './components/equipos-br/equipos-br';
import { Productosids } from './components/productosids/productosids';

@NgModule({
  declarations: [
    App,
    Inicio,
    Carousel,
    Contacto,
    Counter,
    Footer,
    Historia,
    Mision,
    Nosotros,
    Productos,
    Elegir,
    Equiposlider,
    Catalogo,
    EquiposBR,
    Productosids,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
