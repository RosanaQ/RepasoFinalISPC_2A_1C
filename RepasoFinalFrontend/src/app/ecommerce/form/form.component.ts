import { Component } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, FormArray} from '@angular/forms';
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
   // Descripcion_S:["",[]]
   servicios: this.formBuilder.array([], [])
   /*  TipoServicio_S: ["", [Validators.required, Validators.maxLength(25), Validators.minLength(4), Validators.pattern(/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚ]+$/)]],
    Precio_S: [0, [Validators.required, Validators.min(2000)]],
    servicios: this.formBuilder.array([], [Validators.required]) */
  })
  
  constructor(private formBuilder: FormBuilder, private suscriptionService: SuscriptionService) { }
  /* nuevaSuscripcion(){
    this.suscriptionService.createSuscription(this.suscripcionForm.value as Partial <Suscription>).subscribe({
   next:(suscriptionData)=> {
     console.log("Enviando form: "+ suscriptionData.TipoServicio_S);
   }
    })
  }
 */
  get ServiciosField(): FormArray {
    return this.suscripcionForm.get('servicios') as FormArray;
  }

  addServiciosField() {
    const servicio = this.formBuilder.group({
      servicio: ["", []]
    })
    this.ServiciosField.push(servicio);
  }

  nuevaSuscripcion() {
    if (true) {

      const data = this.suscripcionForm.value
      // Este auxiliar almacena el Precio del form en numero, previamente se convierte a una cadena de texto.
      let auxiliar = parseInt(JSON.stringify(data.Precio_S))

      // Creamos una suscripcion para guardarle los valores transformados
      const suscription: CreateSuscriptionDTO = {
        // En Descripcion_S que viene un tipo desconocido, al igual con TipoServicio tambien convertimos a String
        Descripcion_S: JSON.stringify(data.servicios),
        TipoServicio_S: JSON.stringify(data.TipoServicio_S).replace(/"/g, ''),
        Precio_S: auxiliar
      }

      // Parseamos el string a tipo objeto JSON, mapeamos para obtener el valor de cada servicio (ArrayForm),
      // Almacenamos una nueva cadena que tiene cada valor separado por ;, de esta forma se almacena en la BD
      const info = JSON.parse(suscription.Descripcion_S);
      const services = info.map((obj: any) => obj.servicio)
      suscription.Descripcion_S = services?.join(";")

      this.suscriptionService.createSuscription(suscription)
        .subscribe(data => {
          console.log(data)
        })

     // this.router.navigateByUrl('/adminSuscripcion');
      this.suscripcionForm.reset();
    } else {
      this.suscripcionForm.markAllAsTouched();
    }
  }


  eliminarInput(i: number){
    this.suscripcionForm.controls.servicios.removeAt(i);
  }
}
