import { Component, OnInit } from '@angular/core';
import { PostService, Post } from './services/post.service';
import { QueryOptions } from './resource.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  post: Post;
  posts: Array<Post>;

  constructor(
     private postService: PostService,
     private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }

  addPost() {
    const newPost: Post = {id: this.posts.length + 1  , title: 'Post ' + (this.posts.length + 1) , author: 'lyndon'};
    this.postService.create(newPost).subscribe( _ => this.listAll() );
  }

  listPrimeiro() {
      this.postService.read(1).subscribe(data => this.post = data as Post);
  }

  listAll() {
    this.postService.listAll().subscribe(d2 => this.setPosts( d2 as Array<Post> ));
  }

  deletePost() {
    if ( this.posts && this.posts.length > 0 ) {
      this.postService.delete( this.posts[0].id ).subscribe( _ => this.listAll() );
    }
  }

  deletePostSemVerificacao() {
    this.postService.delete( 0 ).subscribe( _ => this.listAll() );
  }


  updateFist() {
    if ( this.posts) {
      const updatePost: Post = {id: 1  , title: 'update Post 1' , author: 'lyndon Update'};
      this.postService
          .update(updatePost)
          .subscribe( _ => this.listAll() , error => this.messageService.info('Erro Uopdate') ) ;
      }
  }

  searchParams() {
    this.postService.searchParams('id=1').subscribe(d2 => this.posts = d2 as Array<Post> );
  }

  searchParams2() {
    this.postService.searchParams('id>1').subscribe(d2 => this.posts = d2 as Array<Post> );
  }

  searchParams3() {
    this.postService.searchParams('id<>1').subscribe(d2 => this.posts = d2 as Array<Post> );
  }

  searchParams4() {
    this.postService.searchParams('title=post%').subscribe(d2 => this.posts = d2 as Array<Post> );
  }

  setPosts ( p: Array<Post>) {
    this.posts =  p;
  }

}


