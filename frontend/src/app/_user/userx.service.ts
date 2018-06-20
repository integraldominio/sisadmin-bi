import { Injectable } from '@angular/core';
import { MessageService } from '../_services/message.service';
import { ResourceService } from '../_services/resource.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../service/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserxService extends ResourceService<Post> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'posts',
      messageService);
  }
}

export class Post {
  id: number;
  title: string;
  author: string;
}

// usando json-server
// npm install -g json-server
// json-server --watch db.json
