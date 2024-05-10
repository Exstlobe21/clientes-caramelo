import { Component } from '@angular/core';
import { Caramelo } from '../caramelo';
import { CarameloService } from '../caramelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-caramelo',
  templateUrl: './producto-caramelo.component.html',
  styleUrl: './producto-caramelo.component.css'
})
export class ProductoCarameloComponent {
  caramelos: Caramelo[] =[];
  constructor(private carameloServicio: CarameloService,
    private router: Router){}
    ngOnInit ():void {
      this.getCaramelos();
    }
    private getCaramelos(){
      this.carameloServicio.getListaCaramelo().subscribe(
        data => {
          this.caramelos=data;
        }
      )
    }
    actualizarCaramelos (id:number){
      this.router.navigate(['actualizar-caramelo',id]);
    }
    eliminarCaramelos (id: number){
      this.carameloServicio.eliminarCaramelo(id).subscribe(
        datos => {
          console.log(datos);
          this.getCaramelos();
        },error => console.log(error)
        );
  }
  
}