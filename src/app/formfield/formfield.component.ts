import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CircleBadgeComponent } from '../shared/circle-badge/circle-badge.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formfield',
  standalone: true,
  imports: [FormsModule, CircleBadgeComponent],
  templateUrl: './formfield.component.html',
  styleUrl: './formfield.component.scss'
})
export class FormfieldComponent {

  http = inject(HttpClient);


  contactData = {
    name: "",
    email: "",
    message: ""
  }


  mailTest = true;

  post = {
    endPoint: 'https://localhost:8080/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error: Error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
