import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  private loggedIn = false;
  private userRole: string | null = null;
  private authToken: string | null = null;

  login(response: any): void {
    this.loggedIn = true;
    this.userRole = response.data.role;
    this.authToken = response.data.accessToken;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('user');
    this.userRole = null;
    this.authToken = null;
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUserRole(): string | null {
    return this.userRole;
  }

  getToken(): string | null {
    return this.authToken;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
