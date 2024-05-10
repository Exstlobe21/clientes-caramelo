import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent} from './lista-clientes/lista-clientes.component';
import {CrearClienteComponent}from './crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ActualizarCarameloComponent } from './actualizar-caramelo/actualizar-caramelo.component';
import { CrearCarameloComponent } from './crear-caramelo/crear-caramelo.component';
import { ProductoCarameloComponent } from './producto-caramelo/producto-caramelo.component';


const routes: Routes = [
  {path: 'clientes', component: ListaClientesComponent},
  
  {path:'crear-cliente', component: CrearClienteComponent},
  {path:'actualizar-cliente/:id', component: ActualizarClienteComponent},
  

  {path:'caramelos',component:ProductoCarameloComponent},
  {path:'crear-caramelo', component: CrearCarameloComponent},
  {path:'actualizar-caramelo/:id', component: ActualizarCarameloComponent},
  {path: '', redirectTo: 'clientes', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
