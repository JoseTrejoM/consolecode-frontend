import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaActualizar = new Subject<Persona[]>();
  private url: string = "http://localhost:8080/personas";
  constructor(private http: HttpClient) {}
  listar(){
    return this.http.get<Persona[]>(this.url);
  }
  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  editar(persona: Persona){
    return this.http.put(this.url,persona);
  }

  registrar(persona: Persona){
    return this.http.post(this.url,persona);
  }

  listPageable(pag: number, tam:number){
    return this.http.get<any>(`${this.url}/pageable?page=${pag}&size=${tam}`)
  }

  }
