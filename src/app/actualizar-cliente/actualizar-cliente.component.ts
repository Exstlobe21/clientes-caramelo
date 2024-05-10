import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent implements OnInit {
  id!:number;
  cliente: Cliente= new Cliente();
  constructor(private clienteServicio: ClienteService,
    private route:ActivatedRoute,
    private router: Router){}
    
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.clienteServicio.getClientePorId(this.id)
      .subscribe(
      datos=> {
        this.cliente=datos;
      }, error => console.log(error)
      );
    }
  onSubmit(){
        console.log(this.cliente);
        this.clienteServicio.actualizarCliente(this.id,
          this.cliente).subscribe(
            datos=> {
              this.listadoClientes();
            }, error=>console.log(error)
          );
      }
      listadoClientes(){
        this.router.navigate(['/clientes']);
      }

      
    }


