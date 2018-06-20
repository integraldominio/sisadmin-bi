import { Injectable } from '@angular/core';
import { MessageService } from './../message.service';
import { ResourceService } from './../resource.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ResourceService<Post> {
  constructor(httpClient: HttpClient, messageService: MessageService ) {
    super(
      httpClient,
      'http://localhost:3000',
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
