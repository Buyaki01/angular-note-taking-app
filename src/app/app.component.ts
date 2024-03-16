import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-note-taking-app';

  isLoggedIn: boolean = false;
  username: string = "Ritta";

  names: string[] = ['Ritta', 'Sweta', 'Buyaki']
}
