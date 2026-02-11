import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  users = [
    { username: 'admin', password: '1234', role: 'admin' },
    { username: 'parent1', password: '1111', role: 'parent' },
    { username: 'parent2', password: '2222', role: 'parent' }
  ];

  currentUser: any = null;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      this.currentUser = user;
      return true;
    }

    return false;
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  getRole() {
    return this.currentUser?.role;
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }
}
