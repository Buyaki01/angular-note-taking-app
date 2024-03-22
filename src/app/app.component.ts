import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user = {
    name: '',
    email: '',
  };

  submitForm(form: NgForm) {
    if(form.valid) {
      console.log(form.value, this.user);
    }
  }
}
