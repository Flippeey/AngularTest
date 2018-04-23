import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class LoginService {
  private file: User[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('./assets/login.json').subscribe((result: User[]) => {
      this.file = result;
    });
  }

  loginUser(username: string, password: string) {
    console.log(username);
    console.log(this.file[0].password);
    const result = this.file.find((user: User) => {
      return user.username === username && user.password === password;
    });

    if (result) {
      return true;
    } else {
      return false;
    }
  }
}
