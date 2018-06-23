import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ErroComponent } from './pages/erro/erro.component';
import { CatalogoComponent } from './erp/catalogo/catalogo.component';
import { ClienteComponent } from './erp/cliente/cliente.component';
import { ProdutoComponent } from './erp/produto/produto.component';

const routes: Routes =

[{ path: 'login', component: LoginComponent},
{ path: 'home',  component: HomeComponent,
  children: [
    { path: 'sobre', component: SobreComponent, },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'cliente',  component: ClienteComponent },
    { path: 'produto',  component: ProdutoComponent },
    { path: '', redirectTo: 'sobre', pathMatch: 'full' }
  ]
},
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: '**', component: ErroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRotasModule {}
