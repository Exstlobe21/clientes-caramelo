import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent implements OnInit {
  cliente:Cliente=new Cliente();
  constructor(private clienteServicio: ClienteService,
    private router: Router){
      
    }
    ngOnInit(): void {
        
    }
    guardaCliente(){
      this.clienteServicio.crearClientes(this.cliente)
      .subscribe(

      datos=>{
        console.log(datos);
        this.listadoClientes();
      },error=> console.log(error)
      )
    }
    listadoClientes(){
      this.router.navigate(['/clientes']);

    }
    onSubmit(){
      console.log(this.cliente);
      this.guardaCliente();
    }
  }
