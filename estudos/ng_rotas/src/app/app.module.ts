import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { FileSelectDirective } from 'ng2-file-upload';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';


import {
  AuthGuard,
  GuestGuard,
  AdminGuard,
  AuthenticationService,
  JwtInterceptor,
  MessageService,
  Resource,
  ResourceService,
  SubResourceService,
  UserService,
  ConfigService
} from './infra';

import { AppRotasModule } from './app-rotas.module';
import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ErroComponent } from './pages/erro/erro.component';
import { ProdutoComponent } from './erp/produto/produto.component';
import { CatalogoComponent } from './erp/catalogo/catalogo.component';
import { ClienteComponent } from './erp/cliente/cliente.component';
import { ClienteService } from './erp/cliente/cliente.service';
import { SidenaveComponent } from './pages/sidenav/sidenav.component';
import { SidenavService } from './pages/sidenav/sidenav.service';
import { UploadComponent } from './upload/upload.component';
import { PetComponent } from './erp/pet/pet.component';
import { QrcodeComponent } from './erp/qrcode/qrcode.component';
import { Upload2Component } from './upload2/upload2.component';
import { Nav2Component } from './nav2/nav2.component';

@NgModule({
  declarations: [
    BaseComponent,
    HomeComponent,
    LoginComponent,
    SobreComponent,
    ErroComponent,
    ProdutoComponent,
    CatalogoComponent,
    ClienteComponent,
    SidenaveComponent,
    UploadComponent,
    PetComponent,
    QrcodeComponent,
    Upload2Component,
    FileSelectDirective,
    Nav2Component
  ],
  imports: [
    // BrowserModule vem em primeiro
    BrowserModule,
    // Http
    HttpModule,
    HttpClientModule,
    // depois outro módulos
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRotasModule,
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,

    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    // formly
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    NgxQRCodeModule,

  ],
  providers: [
    SidenavService,
    ClienteService,

    AuthGuard,
    GuestGuard,
    AdminGuard,
    AuthenticationService,
    ConfigService,
    JwtInterceptor,
    MessageService,
    UserService,

  ],
  bootstrap: [BaseComponent],
  exports: [BaseComponent]
})
export class AppModule { }
