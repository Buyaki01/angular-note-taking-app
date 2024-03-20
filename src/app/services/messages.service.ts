import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/posts.interface';
import { Student } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getMessages(){
    return ['message 1', 'message 2', 'message 3']
  }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }

  getLanguages(): Observable<Array<string>> {
    return this.http.get<Array<string>>('http://localhost:1111/languages')
  }

  getStudents(): Observable<Student> {
    return this.http.get<Student>('http://localhost:1111/students')
  }
}
