import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErroComponent } from './pages/erro/erro.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'erp', loadChildren: './erp/erp.module#ErpModule'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: '**', component: ErroComponent },
 /* por último. Como o módulo erp está lazy, router não sabe das rotas e invalida qualquer rota de erp
 . Colocar macther para filtrar rotas invalidas */
];

@NgModule({
   exports: [RouterModule],

   /* Default Preloading...*/
   /* imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })], */

   /* Lazy Loading...*/
   imports: [RouterModule.forRoot(routes, { enableTracing: true })],
})
export class RotasModule { }
