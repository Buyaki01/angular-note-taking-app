import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-note-taking-app';
  myBtn: string = 'My Button';

  counter: number = 0;

  // attr binding
  isDisabled: Boolean = false;
  angularImage: string = '../assets/angular16.png'

  // Styles Binding
  bgColor: string = 'green';
  titleColor: string = 'white';
  description: string = 'font-size: 50px; color: white';

  incrementCount() {
    this.counter++;
  }
}
