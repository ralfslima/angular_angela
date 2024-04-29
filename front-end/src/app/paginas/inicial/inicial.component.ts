import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PessoasService } from '../../servicos/pessoas.service';
import { Pessoa } from '../../modelos/Pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css'
})
export class InicialComponent {

  // Vetor contendo todas as pessoas
  vetor:Pessoa[] = [];

  // Construtor
  constructor(private servico:PessoasService, private rota:Router){}

  // Ao inicializar o componente, obter todos os clientes
  ngOnInit(){
    this.servico.listar().subscribe(retorno => this.vetor = retorno);
  }

  // Formulário reativo - Criar conta
  formularioCritarConta = new FormGroup({
    nome : new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  })

  // Formulário reativo - Autenticar/Entrar
  formularioAutenticar = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  })

  // Criar conta
  criarConta():void{
    this.servico.cadastrar(this.formularioCritarConta.value as Pessoa).subscribe(retorno => {
      this.vetor.push(retorno);
      
      // LocalStorage (para ter acesso aos dados da pessoa na outra página)
      localStorage.setItem('pessoa', JSON.stringify(this.formularioCritarConta.value))

      // Redirecionamento
      this.rota.navigateByUrl('/contas')
    })
  }

  // Realizar o login/autenticar
  autenticar():void{
    let existePessoa = this.vetor.findIndex(obj => {return obj.email == this.formularioAutenticar.value.email && obj.senha == this.formularioAutenticar.value.senha})

    if(existePessoa == -1){
      alert('E-mail ou senha incorretos')
    }else{
      // LocalStorage (para ter acesso aos dados da pessoa na outra página)
      localStorage.setItem('pessoa', JSON.stringify(this.formularioAutenticar.value))

      // Redirecionamento
      this.rota.navigateByUrl('/contas')
    }
    
  }

}
