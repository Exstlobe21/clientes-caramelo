import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Cliente} from './cliente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseURL = "http://localhost:8080/api/v1/clientes";


  constructor(private httpClient: HttpClient) { }
  getListaCliente(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`)
  }
  getClientePorId(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }
  crearClientes(cliente:Cliente):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cliente)
  }
  actualizarCliente(id:number, cliente:Cliente): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,cliente);
  }
  eliminarCliente(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
