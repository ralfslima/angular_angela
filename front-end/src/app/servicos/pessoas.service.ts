import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../modelos/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  // URL da API
  private url:string = 'http://localhost:3000/pessoas';

  // Construtor
  constructor(private http:HttpClient) { }

  // Listar todas as pessoas
  listar():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }

  // Cadastrar pessoa
  cadastrar(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.url, pessoa);
  }
}
