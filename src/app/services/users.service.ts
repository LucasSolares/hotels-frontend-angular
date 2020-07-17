import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  async register(
    email: string,
    password: string,
    name: string,
    lastName: string
  ) {
    const register = await this.http
      .post(
        'https://hotels-control.herokuapp.com/user',
        { name, lastName, email, password }
      )
      .toPromise();

    if (!register['error']) {
      return this.http.post('https://hotels-control.herokuapp.com/user/signin', { email, password });
    }
  }

  login(email: string, password: string) {
    return this.http.post('https://hotels-control.herokuapp.com/user/signin', { email, password });
  }
}
