# Rxjs - Observable

Exemplo de programação reativa com a rxjs.

```javascript
@Component({
  selector: 'app-root',
  template: `<input type="text" [formControl]  ="myInput">
              <ul>
                <li *ngFor="let r of result | async "> {{ r?.name }}</li>
                 <!-- async faz subscricao e cancela observable -->
              </ul> `
})
export class AppComponent {
  myInput = new FormControl;
  result = from([])
      .pipe( // versão 6.0 rxjs operações são encadeados com pipe
        merge( this.myInput.valueChanges) , // pega input e combina com array inicial
        filter( v => v.length > 1 ) , // filtra tamanho da sequenc de caraters para buscar somente maior que 1
        debounceTime( 300 ) , // tempo de espera, evita flodar api ( tempo de espera para próximo evento )
        map( v => `https://swapi.co/api/people/?search=${v}`) , // pega resposta do request
        switchMap( url => this.http.get(url)) , // cancela subscrições anteriores
        map( json => json['results']), // map para json
        retry(3), // número de tentativas
      );
```

## Os seguintes operadores foram renomeados na versão RxJs 6

```
catch() => catchError()
do() => tap()
finally() => finalize()
switch() => switchAll()
Additionally, some Observable-creation methods were renamed/ refactored:
throw() => throwError()
fromPromise() => from() (this automatically detects the type)
```

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
