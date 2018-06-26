import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService, MessageService, ResourceService } from '../../infra';

@Injectable({
  providedIn: 'root'
})
export class PetService extends ResourceService<Pet> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'pets',
      messageService);
  }
}

export class Pet {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  cityName: number;
  zip: string;
  otherInput: string;
  otherToo: boolean;
  image: string;
}

// usando json-server
// npm install -g json-server
// json-server --watch db.json
