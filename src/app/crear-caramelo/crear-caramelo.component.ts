import { Component } from '@angular/core';
import { Caramelo } from '../caramelo';
import { CarameloService } from '../caramelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-caramelo',
  templateUrl: './crear-caramelo.component.html',
  styleUrl: './crear-caramelo.component.css'
})
export class CrearCarameloComponent {

  caramelo:Caramelo=new Caramelo();
  constructor(private carameloServicio: CarameloService,
    private router: Router){
      
    }
    ngOnInit(): void {
        
    }
    guardaCaramelo(){
      this.carameloServicio.crearCaramelo(this.caramelo)
      .subscribe(

      datos=>{
        console.log(datos);
        this.listadoCaramelo();
      },error=> console.log(error)
      )
    }
    listadoCaramelo(){
      this.router.navigate(['/caramelos']);

    }
    onSubmit(){
      console.log(this.caramelo);
      this.guardaCaramelo();
    }
}



