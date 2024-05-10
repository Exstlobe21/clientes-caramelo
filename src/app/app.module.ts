import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { FormsModule } from '@angular/forms';
import { CrearCarameloComponent } from './crear-caramelo/crear-caramelo.component';
import { ActualizarCarameloComponent } from './actualizar-caramelo/actualizar-caramelo.component';
import { ProductoCarameloComponent } from './producto-caramelo/producto-caramelo.component';
import { VerCarameloComponent } from './ver-caramelo/ver-caramelo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    CrearCarameloComponent,
    ActualizarCarameloComponent,
    ProductoCarameloComponent,
    VerCarameloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
