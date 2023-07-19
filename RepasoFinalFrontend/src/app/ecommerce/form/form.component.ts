import { Component } from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import {CreateSuscriptionDTO, Suscription } from 'src/app/model/suscription.model';
import { SuscriptionService } from 'src/app/services/suscription.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  suscripcionForm = this.formBuilder.group({
    TipoServicio_S:["",[]],
    Precio_S:["",[]],
    Descripcion_S:["",[]]
   /*  TipoServicio_S: ["", [Validators.required, Validators.maxLength(25), Validators.minLength(4), Validators.pattern(/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/)]],
    Precio_S: [0, [Validators.required, Validators.min(2000)]],
    servicios: this.formBuilder.array([], [Validators.required]) */
  })
  constructor(private formBuilder: FormBuilder, private suscriptionService: SuscriptionService) { }
  nuevaSuscripcion(){
    this.suscriptionService.createSuscription(this.suscripcionForm.value as Partial <Suscription>).subscribe({
   next:(suscriptionData)=> {
     console.log("Enviando form: "+ suscriptionData.TipoServicio_S);
   }

   
   
    })
  }
}
