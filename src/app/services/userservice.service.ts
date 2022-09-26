import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  user: User;

  url = 'http://localhost:8888/users';

  constructor(private userService: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.userService.get<User[]>(this.url);
  }

  getUserById(id: number): Observable<User> {
    return this.userService.get<User>(this.url + "/" + id);
  }

  postUser(user: User): Observable<User> {
    return this.userService.post<User>(this.url, user);
  }

  updateUser(user: User) {
    return this.userService.put(this.url, user);
  }

  deleteUser(id: any) {
    return this.userService.delete(this.url + "/" + id);
  }
}

