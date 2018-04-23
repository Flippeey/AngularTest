export class User {
  private _username: string;
  private _password: string;

  public get username(): string {
    return this._username;
  }

  public get password(): string {
    return this._password;
  }

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
  }
}
