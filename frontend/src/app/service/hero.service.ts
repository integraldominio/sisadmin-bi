import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero'
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://localhost:8080/heroes';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
  }

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {
  }

  getHeroes(): Promise<Hero[]> {
     return this.http
      .get(this.heroesUrl, {headers: this.getHeaders()})
      .toPromise()
      .then((response: any) => response._embedded.heroes as Hero[])
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in hero service: ', error); // for demo only
    return Promise.reject(error.message || error);
  }


  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.getHeaders()})
      .toPromise()
      .catch(this.handleError)
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.getHeaders()})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    console.log(`hero.service - deleting ${id}`);
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
