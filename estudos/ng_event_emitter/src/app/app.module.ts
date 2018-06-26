import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProdutoComponent } from './produto/produto.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  declarations: [
    ProdutoComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProdutoComponent]
})
export class AppModule { }
