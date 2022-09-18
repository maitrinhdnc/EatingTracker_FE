import { Injectable, EventEmitter } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService extends EventEmitter {
  constructor() {
    super()
   }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    if(!user)return
    // window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.emit(user);
  }

  public getUser(): any {
    const userstring = window.sessionStorage.getItem(USER_KEY);
    if (userstring) {
      const user =  JSON.parse(userstring);
      this.emit(user);
      return user

    }

    return {};
  }
}
