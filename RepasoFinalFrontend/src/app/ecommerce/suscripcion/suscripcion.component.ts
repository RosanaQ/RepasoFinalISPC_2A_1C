import { Component } from '@angular/core';
import { Suscription } from 'src/app/model/suscription.model';
import { SuscriptionService } from 'src/app/services/suscription.service';
@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent {
mySuscriptions: Suscription[]= [];
constructor(private suscriptionService:SuscriptionService ){}
private obtenerSuscripciones(){
  this.suscriptionService.obtenerServicios().subscribe({
  next: (suscriptionData) => {
    this.mySuscriptions= suscriptionData;

  },
  error:(errorData)=> {
    console.error(errorData);
  }

  }) 
  
  
}

    

}
