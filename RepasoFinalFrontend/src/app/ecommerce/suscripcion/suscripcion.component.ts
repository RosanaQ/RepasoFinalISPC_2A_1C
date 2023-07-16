import { Component, OnInit } from '@angular/core';
import { SuscriptionService } from 'src/app/services/suscription.service';
import { Suscription } from 'src/app/model/suscription.model';
@Component({

  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  mySuscriptions: Suscription[] = [];
constructor (private suscriptionService: SuscriptionService){}
ngOnInit(): void {
this.suscriptionService.getAllSuscriptions().subscribe(data =>{this.mySuscriptions = data});
}
pagarSuscripcion(dato: Suscription){}
}
