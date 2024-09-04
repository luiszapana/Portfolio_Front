import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  private isSessionStorageAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.sessionStorage;
  }

  public setToken(token: string): void {
    if (this.isSessionStorageAvailable()) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
  }

  public getToken(): string | null {
    if (this.isSessionStorageAvailable()) {
      return sessionStorage.getItem(TOKEN_KEY);
    }
    return null;
  }

  public setUsername(username: string): void {
    if (this.isSessionStorageAvailable()) {
      window.sessionStorage.removeItem(USERNAME_KEY);
      window.sessionStorage.setItem(USERNAME_KEY, username);
    }
  }

  public getUsername(): string | null {
    if (this.isSessionStorageAvailable()) {
      return sessionStorage.getItem(USERNAME_KEY);
    }
    return null;
  }

  public setAuthorities(authorities: string[]): void {
    if (this.isSessionStorageAvailable()) {
      window.sessionStorage.removeItem(AUTHORITIES_KEY);
      window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (this.isSessionStorageAvailable() && sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority: any) => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logout(): void {
    if (this.isSessionStorageAvailable()) {
      window.sessionStorage.clear();
    }
  }
}