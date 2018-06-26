import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Object[];

  constructor() {
    this.produtos = [
      {
        nome: 'IPhoneX',
      },
      {
        nome: 'Galaxy S9',
      },
      {
        nome: 'Sony Xperia',
      }
    ];
  }

  ngOnInit() {
  }

   // função para receber emit Output do Filho
   reciverFeedback(respostaDetalhe) {
    console.log('Foi emitido evento que chegou de DetalheComponent >>>> ', respostaDetalhe);
  }

}
