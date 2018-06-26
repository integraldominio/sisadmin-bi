import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  @Input()  recebeProdutos;
  @Output() respostaDetalhe = new EventEmitter();

  constructor() { }

  ngOnInit() {
      console.log('Objeto produtos recebido de ProdutoComponent via Input: ', this.recebeProdutos);
  }

  feedback() {
    console.log('Resposta para o component pai', this.respostaDetalhe.emit({'nome': 'Galaxy Note 8'}));
  }

}
