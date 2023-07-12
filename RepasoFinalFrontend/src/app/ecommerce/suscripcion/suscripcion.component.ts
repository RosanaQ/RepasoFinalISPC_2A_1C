import { Component } from '@angular/core';
import { Suscription } from 'src/app/model/suscription.model';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent {
mySuscriptions: Suscription[]= [];
    

}
