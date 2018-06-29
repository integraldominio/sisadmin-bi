import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedido/pedido.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ErroComponent } from '../pages/erro/erro.component';

const erpRotas: Routes = [
  { path: '' , children: [
          { path: 'catalogo', component: CatalogoComponent, data: { page: 'e1' }  },
          { path: 'pedido', component: PedidoComponent, data: { page: 'e2' } },
          { path: '**', component: ErroComponent, data: { page: 'e3' } },
        ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(erpRotas)],
})
export class ErpRotas { }
