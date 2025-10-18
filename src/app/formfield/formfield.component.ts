import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CircleBadgeComponent } from '../shared/circle-badge/circle-badge.component';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * The FormfieldComponent represents the contact form used for sending messages.
 *
 * It manages form input data, validates user input, and submits the data
 * to a specified backend endpoint using an HTTP POST request.
 *
 * The component uses template-driven forms via Angular’s FormsModule
 * and includes translation and visual enhancements through shared subcomponents.
 */
@Component({
  selector: 'app-formfield',
  standalone: true,
  imports: [FormsModule, CircleBadgeComponent, TranslatePipe],
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss', './formfield.mobile.scss']
})
export class FormfieldComponent {
  /**
   * Injected instance of Angular's HttpClient for handling HTTP requests.
   */
  http = inject(HttpClient);

  /**
   * Object storing the current values of the contact form fields.
   *
   * @property {string} name - The user's name.
   * @property {string} email - The user's email address.
   * @property {string} message - The user's message content.
   * @property {boolean} checkbox - Indicates whether the user agreed to terms.
   */
  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  };


  sent = false;

  /**
   * Configuration for the POST request that sends the contact form data.
   * Contains the backend endpoint, request body formatter, and headers.
   *
   * @property {string} endPoint - The URL of the backend endpoint.
   * @property {(payload: any) => string} body - Function that converts the payload to a string.
   * @property {object} options - HTTP request options, including headers.
   */
  post = {
    endPoint: 'https://stephan-steiner-dev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Handles form submission. Validates the form, sends the data to the server,
   * and resets the form upon success or completion.
   *
   * @param {NgForm} ngForm - The Angular form reference containing form state and data.
   */
  onSubmit(ngForm: NgForm): void {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.sent = true;
            setTimeout(() => this.sent = false, 3000);
            ngForm.resetForm();
          },
          error: (error: Error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
    }
  }
}