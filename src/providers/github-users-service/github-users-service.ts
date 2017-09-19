import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class GithubUsersService {

constructor(public http: Http) {
  }

  getUsers(): Observable<User[]>{
     return this.http.get('https://api.github.com/users')
       .map(res => <Array<User>>res.json());
  }

}
