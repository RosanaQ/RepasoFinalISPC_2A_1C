import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Suscription} from '../model/suscription.model';

@Injectable({
  providedIn: 'root'
})

export class SuscriptionService {
url:string='http://localhost:8000/api/v1/servicios';
url2:string='http://localhost:3000/servicios';
url3:string="api/v1/servicios/";
  constructor(private http:HttpClient) { }
/*Obtiene listado de servicios*/
getAllSuscriptions():Observable<Suscription[]>{
  return this.http.get<Suscription[]>(this.url3)
  .pipe(map(suscripciones=>suscripciones.map(item=>{
    return{
      ...item,
      DescripcionList:item.Descripcion_S.split(";")
    }
  })));
} 

}
