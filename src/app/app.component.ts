import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { Post } from './interfaces/posts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessagesService],
})
export class AppComponent implements OnInit{
  messages: string[] = [];
  posts: Post[] = [];

  constructor(private messagesService: MessagesService) {
    this.messages = messagesService.getMessages();
  }

  ngOnInit(){
    // this.messagesService.getPosts().subscribe(response => {
    //   this.posts = response;
    // }, (error) => {
    //   console.error(error);
    // }) 
    //subscribe has been deprecated

    this.messagesService.getPosts().subscribe({
      next: (response:Post[]) => {
        this.posts = response;
      },
      error: (error) => {console.error(error);}
    })
  }

  title = 'angular-note-taking-app';
}
