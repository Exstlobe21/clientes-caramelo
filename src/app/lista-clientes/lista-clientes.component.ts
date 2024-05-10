
import { Component,OnInit } from '@angular/core';
import {Cliente} from '../cliente';
import { ClienteService} from '../cliente.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {
  clientes: Cliente[] =[];
  constructor(private clienteServicio: ClienteService,
    private router: Router){}
    ngOnInit ():void {
    /*  this.clientes=[
        {
        "idClientes": 2,
        "nombres": "Jhosstin",
        "apellidos": "Moreira",
        "cedula": "1323134564",
        "telefono": "0985555545",
        "direccion": "Portoviejo"
        }
      ]*/
      this.getClientes();
    }
    private getClientes(){
      this.clienteServicio.getListaCliente().subscribe(
        data => {
          this.clientes=data;
        }
      )
    }
    actualizarCliente (id:number){
      this.router.navigate(['actualizar-cliente',id]);
    }
    eliminarCliente (id: number){
      this.clienteServicio.eliminarCliente(id).subscribe(
        datos => {
          console.log(datos);
          this.getClientes();
        },error => console.log(error)
        );
       }
    detallesCliente (id: number) {
      this.router.navigate(['detalle-cliente',id]);

    }
}
