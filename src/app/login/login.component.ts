import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loginFormFields: FormlyFieldConfig;
  @Input() loginFormModel;

  loginForm: FormGroup = new FormGroup({});

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  loginUser(username: string, password: string) {
    alert(
      this.loginService.loginUser(username, password)
        ? 'You have been logged in succesfully.'
        : 'Invalid login. Please try again.'
    );
  }

  onLoginFormSubmit() {
    if (this.loginForm.valid) {
      this.loginUser(
        this.loginForm.controls.username.value,
        this.loginForm.controls.password.value
      );
    }
  }
}
