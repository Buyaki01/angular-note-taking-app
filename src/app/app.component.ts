import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-note-taking-app';
  myBtn: string = 'My Button';

  // attr binding
  isDisabled: Boolean = false;
  angularImage: string = '../assets/angular16.png'
}
