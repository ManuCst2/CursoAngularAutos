import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clases, Lineas, Marcas } from '../models/autos.model';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private url = environment.apiUrl;
  constructor(private http:HttpClient) { }
///Marcas
  oMarcas(): Observable<Marcas[]>{
    return this.http.get<Marcas[]>(`${this.url}marcas`)
  }
  oMarcaId(id:number): Observable<Marcas[]>{
    return this.http.get<Marcas[]>(`${this.url}marcas/${id}`);
  }
  GuardaMarca(marca:Marcas): Observable<any>{
    return this.http.post(`${this.url}marcas`, marca);
  }
  ActualizaMarca(id: number, marca: Marcas) {
    return this.http.put(`${this.url}marcas/${id}`, marca);
  }
  BorraMarca(id: number) {
    return this.http.delete(`${this.url}marcas/${id}`);
  }
///Lineas
  oLineas(): Observable<Lineas[]>{
    return this.http.get<Lineas[]>(`${this.url}lineas`)
  }
  oLineaId(id:number): Observable<Lineas[]>{
    return this.http.get<Lineas[]>(`${this.url}lineas/${id}`);
  }
  GuardaLinea(marca:Lineas): Observable<any>{
    return this.http.post(`${this.url}lineas`, marca);
  }
  ActualizaLinea(id: number, marca: Lineas) {
    return this.http.put(`${this.url}lineas/${id}`, marca);
  }
  BorraLinea(id: number) {
    return this.http.delete(`${this.url}lineas/${id}`);
  }


  oClases(): Observable<Clases[]>{
    return this.http.get<Clases[]>(`${this.url}clases`)
  }

  
}
