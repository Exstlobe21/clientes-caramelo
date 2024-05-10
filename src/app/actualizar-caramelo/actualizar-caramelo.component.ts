import { Component, OnInit } from '@angular/core';
import { Caramelo } from '../caramelo';
import { CarameloService } from '../caramelo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-caramelo',
  templateUrl: './actualizar-caramelo.component.html',
  styleUrl: './actualizar-caramelo.component.css'
})
export class ActualizarCarameloComponent implements OnInit {
  id!:number;
  caramelo: Caramelo= new Caramelo();
  constructor(private carameloServicio: CarameloService,
    private route:ActivatedRoute,
    private router: Router){}
    
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.carameloServicio.getCarameloPorId(this.id)
      .subscribe(
      datos=> {
        this.caramelo=datos;
      }, error => console.log(error)
      );
    }
  onSubmit(){
        console.log(this.caramelo);
        this.carameloServicio.actualizarCaramelo(this.id,
          this.caramelo).subscribe(
            datos=> {
              this.listadoClientes();
            }, error=>console.log(error)
          );
      }
      listadoClientes(){
        this.router.navigate(['/caramelos']);
      }

      
    }
