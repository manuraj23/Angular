import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-first-form',
  imports: [FormsModule],
  templateUrl: './first-form.html',
  styleUrl: './first-form.css',
})
export class FirstForm {
  name='';
  email='';
  age='';
  password='';
  
  submitForm() {
    console.log('Form Submitted!');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Age:', this.age);
    console.log('Password:', this.password);
    alert(`Form Submitted!\nName: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nPassword: ${this.password}`);
  }
}
