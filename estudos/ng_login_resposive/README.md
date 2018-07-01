# Login Material Design
Exemplo de App com form de login usando Angular 6.

## Tecnologias

* [Angular 6](https://angular.io/)
* [Matgerial Design](https://material.angular.io)
* [Flex-Layout](https://github.com/angular/flex-layout/wiki)

## Material

### Instale

```
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install --save hammerjs
```

### Adicione em AppModule

```javascript
...
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  ...
})
export class AppModule { }
```

### Adicione em style.css

```css
style.css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

### Adicione em Index.html

```css
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
```

## Flex-Layout

### Instale

```
npm install @angular/flex-layout --save
```

### Adicione em AppModule

```javascript
...
import {FlexLayoutModule} from '@angular/flex-layout';
...
@NgModule({
  imports: [
    ...
    FlexLayoutModule,
    ...
  ],
  ...
})
export class AppModule {}
```

## Angular

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
