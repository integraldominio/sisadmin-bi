import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { ResourceService } from './resource.service';

export class Pizza {
  id: number;
  descricao: string
}

@Injectable({ providedIn: 'root' })
export class PizzaServiceCRUD extends ResourceService<Pizza> {
  constructor(httpClient: HttpClient, messageService: MessageService ) {
    super(
      httpClient,
      'http://localhost:8080',
      'pizzas',
      messageService);
  }
}
