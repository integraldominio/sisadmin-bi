import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseComponent } from './pages/base/base.component';
import { RotasModule } from './rotas.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErroComponent } from './pages/erro/erro.component';
import { LoginComponent } from './pages/login/login.component';
import { ErpRotas } from './erp/erp.rotas';
import { ErpModule } from './erp/erp.module';

@NgModule({
  declarations: [
    BaseComponent,
    HomeComponent,
    AboutComponent,
    ErroComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    RotasModule,
    ErpRotas,
    ErpModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
