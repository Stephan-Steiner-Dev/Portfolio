import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CircleBadgeComponent } from '../shared/circle-badge/circle-badge.component';

@Component({
  selector: 'app-formfield',
  standalone: true,
  imports: [FormsModule, CircleBadgeComponent],
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
    console.log(this.contactData)
  }
}
