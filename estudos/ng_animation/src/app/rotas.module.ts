import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErroComponent } from './pages/erro/erro.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { page: '1' } },
  { path: 'about', component: AboutComponent, data: { page: '2' } },
  { path: 'login', component: LoginComponent, data: { page: '3' } },
  { path: 'erp', loadChildren: './erp/erp.module#ErpModule'},
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { page: '0' }  },
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
