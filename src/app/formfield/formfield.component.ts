import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formfield',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formfield.component.html',
  styleUrl: './formfield.component.scss'
})
export class FormfieldComponent {

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  onSubmit() {
    console.log('sdsds')
  }
}
