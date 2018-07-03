import { Component } from '@angular/core';
import { FormControl } from '../../node_modules/@angular/forms';
import { Observable, from } from 'rxjs';
import { switchMap, merge, map, throttle, filter, debounceTime, retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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

  constructor( private http: HttpClient ) {}

  trataErro() {
  }

}
