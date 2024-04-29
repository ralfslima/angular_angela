import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from '../modelos/Conta';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  // URL da API
  private url:string = 'http://localhost:3000/contas';

  // Construtor
  constructor(private http:HttpClient) { }

  // Listar todas as pessoas
  listar():Observable<Conta[]>{
    return this.http.get<Conta[]>(this.url);
  }

  // Cadastrar pessoa
  cadastrar(conta:Conta):Observable<Conta>{
    return this.http.post<Conta>(this.url, conta);
  }
}
