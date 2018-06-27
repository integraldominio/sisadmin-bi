import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SidenaveComponent } from './pages/sidenav/sidenav.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ErroComponent } from './pages/erro/erro.component';
import { CatalogoComponent } from './erp/catalogo/catalogo.component';
import { ClienteComponent } from './erp/cliente/cliente.component';
import { ProdutoComponent } from './erp/produto/produto.component';
import { AuthGuard } from './infra';
import { UploadComponent } from './upload/upload.component';
import { Upload2Component } from './upload2/upload2.component';
import { PetComponent } from './erp/pet/pet.component';
import { Nav2Component } from './nav2/nav2.component';

const routes: Routes =

[{ path: 'login', component: LoginComponent},
{ path: 'home',  component: SidenaveComponent, canActivate: [AuthGuard] ,
  children: [
    { path: 'sobre', component: SobreComponent, canActivate: [AuthGuard]},
    { path: 'catalogo', component: CatalogoComponent, canActivate: [AuthGuard] },
    { path: 'cliente',  component: ClienteComponent, canActivate: [AuthGuard] },
    { path: 'produto',  component: ProdutoComponent, canActivate: [AuthGuard] },
    { path: 'pet',  component: PetComponent, canActivate: [AuthGuard] },
    { path: 'upload',  component: UploadComponent  , canActivate: [AuthGuard] },
    { path: 'upload2',  component: Upload2Component  , canActivate: [AuthGuard] },
    { path: 'nav2',  component: Nav2Component  , canActivate: [AuthGuard] },
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
