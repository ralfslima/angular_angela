import { Component } from '@angular/core';
import { Pessoa } from '../../modelos/Pessoa';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Conta } from '../../modelos/Conta';
import { ContasService } from '../../servicos/contas.service';

@Component({
  selector: 'app-contas',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contas.component.html',
  styleUrl: './contas.component.css'
})
export class ContasComponent {

  // Lista contendo todas as contas - Na sua API em Java terá que pegar apenas as contas de determinada pessoa
  vetor:Conta[] = [];

  // Objeto do LocalStorage
  objLocalStorage:Pessoa | undefined;

  // Formulário reativo - Cadastrar conta
  formularioConta = new FormGroup({
    nome : new FormControl(''),
    valor: new FormControl('')
  })

  // Ao carregar o componente
  ngOnInit(){
    // Obter todas as contas
    this.servico.listar().subscribe(retorno => this.vetor = retorno);

    // Obter os dados via LocalStorage
    this.objLocalStorage = JSON.parse(localStorage.getItem('pessoa') || '{}')

    // Validação (se o usuário foi autenticado)
    if(this.objLocalStorage?.email == '' || this.objLocalStorage?.email == undefined){
      this.rota.navigateByUrl('/inicial');
    }
  }

  // Construtor
  constructor(private rota:Router, private servico:ContasService){}

  // Sair do sistema
  sair(){
    localStorage.clear();
    this.rota.navigateByUrl('/inicial');
  }

  // Cadastrar conta
  cadastrar(){
    this.servico.cadastrar(this.formularioConta.value as Conta).subscribe(retorno => {
      // Adicionar no vetor
      this.vetor.push(retorno);
      
      // Mensagem
      alert('Conta cadastrada com sucesso!')
    })
  }
}
