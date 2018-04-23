import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginFormModel = {
    username: '',
    password: ''
  };
  loginFormFields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Username',
        placeholder: 'example@example.com',
        required: true,
        validation: {
          messages: {
            required: 'Please enter a username.'
          }
        }
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
        validation: {
          messages: {
            required: 'Please enter your password.'
          }
        }
      }
    }
  ];
}
