import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class Resource {
  id: number;
  parentId?: number;
}

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}

export class ResourceService<T extends Resource> {

  constructor(
      private http: HttpClient,
      private url: string,
      private endpoint: string,
      private messageService: MessageService ) {
          console.log('ResourceService');
      }

    public create(item: T): Observable<T> {
        return this.http.post<T>(`${this.url}/${this.endpoint}`, item, httpOptions)
        .pipe(
          tap( (i: T) => this.log(`added id=${i.id}`)),
          catchError(this.handleError<T>('Erro criando...'))
        );
    }

    public read(id: number): Observable<T> {
      return this.http.get<T>(`${this.url}/${this.endpoint}/${id}`).pipe(
        tap( _ => this.log(`Carrefando id=${id}`)),
        catchError(this.handleError<any>(`${this.endpoint} id=${id}`))
      );
    }

    public update(item: T): Observable<T> {
        return this.http.put(`${this.url}/${this.endpoint}/${item.id}`, item, httpOptions)
        .pipe(
          tap(_ => this.log(`updated id=${item.id}`)),
          catchError(this.handleError<any>('Erro atualizando...'))
        );
    }

    public search(queryOptions: QueryOptions): Observable<T[]> {
        return this.http.get<T[]>(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
        .pipe(
          tap(_ => this.log(`Encontrados...`)),
          catchError(this.handleError<T[]>('Erro Busando...', []))
        );
    }

    public searchParams(params: string): Observable<T[]> {
      return this.http.get<T[]>(`${this.url}/${this.endpoint}?${params}`)
      .pipe(
        /*tap(_ => this.log(`Encontrados...`))*/,
        catchError(this.handleError<T[]>('Erro Busando...', []))
      );
  }

    public listAll() {
      return this.http.get<T[]>(`${this.url}/${this.endpoint}`)
      .pipe(
        /* tap( _ => this.log(`List All...`)) */,
        catchError(this.handleError<T[]>('Erro Busando...', []))
      );
  }

    public delete(id: number) {
      if ( id as number > 0 ) {
      return this.http.delete<T>(`${this.url}/${this.endpoint}/${id}`, httpOptions)
      .pipe(
        tap(_ => this.log(`Deletado id=${id}`)),
        catchError(this.handleError<T>('Erro Deletando...'))
      );
      }
      this.log('Informe ID válido');
    }

    private log(message: string, acao?: string) {
      this.messageService.info( message, acao );
    }

    private handleError<S> (operation = 'operation', result?: S) {
      return (error: any): Observable<S> => {
        // TODO: send the error to remote logging infrastructure
        console.log('>>> Erro capturado...');
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption

        let msg: string;
        if ( error.status === 404) {
          msg = ' Não encontrado!';
        }
        this.log(`${operation.toUpperCase()}`, `${msg}`);
        // Let the app keep running by returning an empty result.
        return of(result as S);
      };
    }

  }

  export class SubResourceService<T extends Resource> {
    constructor(
      private http: HttpClient,
      private url: string,
      private parentEndpoint: string,
      private endpoint: string,
      private serializer: Serializer,
      private messageService: MessageService ) {  }

    public create(item: T): Observable<T> {
    return this.http
      .post<T>(`${this.url}/${this.parentEndpoint}/${item.parentId}/${this.endpoint}`, item, httpOptions)
      .pipe(
        tap( (i: T) => this.log(`added id=${i.id}`)),
        catchError(this.handleError<T>('Erro criando...'))
      );
    }

    public read(parentId: number, id: number): Observable<T> {
      return this.http
        .get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`)
        .pipe(
          tap( _ => this.log(`Carrefando id=${id}`)),
          catchError(this.handleError<any>(`getHero id=${id}`))
        );
    }

    public update(item: T): Observable<T> {
      return this.http
        .put<T>(`${this.url}/${this.parentEndpoint}/${item.parentId}/${this.endpoint}/${item.id}`, item, httpOptions)
        .pipe(
          tap(_ => this.log(`updated id=${item.id}`)),
          catchError(this.handleError<any>('Erro atualizando...'))
        );
    }

   public search(parentId: number, queryOptions: QueryOptions): Observable<T[]> {
        return this.http.get<T[]>(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}?${queryOptions.toQueryString()}`)
        .pipe(
          tap(_ => this.log(`Encontrados...`)),
          catchError(this.handleError<T[]>('Erro Busando...', []))
        );
    }

    public delete(parentId: number, id: number) {
      return this.http.delete<T>(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`)
        .pipe(
          tap(_ => this.log(`Deletado id=${id}`)),
          catchError(this.handleError<T>('Erro Deletando...'))
        );
    }

    protected convertData(data: any): T[] {
      return data.map(item => this.serializer.fromJson(item));
    }

    private log(message: string) {
      this.messageService.info( message );
    }

    private handleError<S> (operation = 'operation', result?: S) {
      return (error: any): Observable<S> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
        // Let the app keep running by returning an empty result.
        return of(result as S);
      };
    }

  }


  export interface QueryBuilder {
    toQueryMap: () => Map<string, string>;
    toQueryString: () => string;
  }

  export class QueryOptions implements QueryBuilder {
    public pageNumber: number;
    public pageSize: number;

    constructor() {
      this.pageNumber = 1;
      this.pageSize = 10000;
    }

    toQueryMap() {
      const queryMap = new Map<string, string>();
      queryMap.set('pageNumber', `${this.pageNumber}`);
      queryMap.set('pageSize', `${this.pageSize}`);

      return queryMap;
    }

    toQueryString() {
      let queryString = '';
      this.toQueryMap().forEach((value: string, key: string) => {
        queryString = queryString.concat(`${key}=${value}&`);
      });
      return queryString.substring(0, queryString.length - 1);
    }
  }
