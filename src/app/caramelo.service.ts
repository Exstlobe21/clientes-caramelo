import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Caramelo} from './caramelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarameloService {
  private baseURL = "http://localhost:8080/api/v1/caramelos";

  constructor(private httpCaramelo: HttpClient) { }

  getListaCaramelo(): Observable<Caramelo[]> {
    return this.httpCaramelo.get<Caramelo[]>(`${this.baseURL}`);
  }

  getCarameloPorId(id: number): Observable<Caramelo> {
    return this.httpCaramelo.get<Caramelo>(`${this.baseURL}/${id}`);
  }
  productoCaramelo(caramelo: Caramelo): Observable<Object> {
    return this.httpCaramelo.post(`${this.baseURL}`, caramelo);
  }

  crearCaramelo(caramelo: Caramelo): Observable<Object> {
    return this.httpCaramelo.post(`${this.baseURL}`, caramelo);
  }

  actualizarCaramelo(id: number, caramelo: Caramelo): Observable<Object> {
    return this.httpCaramelo.put(`${this.baseURL}/${id}`, caramelo);
  }

  eliminarCaramelo(id: number): Observable<Object> {
    return this.httpCaramelo.delete(`${this.baseURL}/${id}`);
  }
}
