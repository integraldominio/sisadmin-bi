import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido/pedido.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ErpRotas } from './erp.rotas';

@NgModule({
  imports: [
    CommonModule,
    ErpRotas
  ],
  declarations: [
    PedidoComponent,
    CatalogoComponent
  ]
})
export class ErpModule { }
