import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  userForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', 
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        ]
      ],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/)
        ])
      ])
    })
  }

  get phoneNumbers() {
    return this.userForm.get('phoneNumbers') as FormArray
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ])
    );
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
    }
  }
}
