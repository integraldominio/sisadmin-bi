# PetStore



## ngx-qrcode2

`ngx-qrcode2` An Angular 6  Component library for Generating QR (Quick Response ) Codes.

You can use the `ngx-qrcode2` to easily generate QR codes inside your Angular 6 or Ionic 3 applications 

>QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to efficiently store data; extensions may also be used. [Source](https://en.wikipedia.org/wiki/QR_code)

## How to install ngx-qrcode2?

To use ngx-qrcode in your project, install it via npm:

```bash
$ npm install ngx-qrcode2 --save
```

## How to use ngx-qrcode2?

For a complete and detailed tutorial on how to use this library. See:

[How to Generate QR Codes In Angular 4+ Applications ](https://www.techiediaries.com/generate-qrcodes-angular)


Import `NgxQRCodeModule` from `ngx-qrcode2`  into your `app.module.ts`:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


Once the library is imported, you can use the ngx-qrcode component in your Angular application.

In `app.component.html`, add:
```xml

<div style="text-align:center">
  <h1>
    ngx-qrcode2 demo 
  </h1>
</div>

<ngx-qrcode 
      [qrc-element-type]="elementType" 
      [qrc-value] = "value"
      qrc-class = "aclass"
      qrc-errorCorrectionLevel = "L">
</ngx-qrcode>

```
In `app.component.ts`, add:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';
}
```


## How to develop ngx-qrcode2?

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

# Dicas Angular CLI

 ng g c base --export --spec false ( Gerar compomente base exportado em app.module sem teste ) --module app

 ng generate module app-routing --flat --module=app ( módulo chamado AppModuleRouting e passando os parâmetros: -flat para que ele seja criado dentro da pasta src/app e o -module=app para registrarmos ele no nosso arquivo AppModule)
 ng g c pages/home

 ng g c pages/sobre2 --spec false --module app --export

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
