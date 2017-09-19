import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Log } from './mylog';

@Injectable()
export class LogService {

constructor(public http: Http) {
  }

  getLog(): Observable<Log[]>{
     return this.http.get('https://api.github.com/users')
       .map(res => <Array<Log>>res.json());
  }

}
