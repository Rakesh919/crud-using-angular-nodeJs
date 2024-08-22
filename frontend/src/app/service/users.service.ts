import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8080/users';
  constructor(private http: HttpClient) { }

  addUsers(name: string,email:string,phone:string,enroll:string,date_of_admission:string): Observable<any> {
    const body = { name, email,phone,enrollment_number:enroll,date_of_admission};
    return this.http.post(this.apiUrl, body);
  }

  // getUsers():Observable<any>{
  //   return this.http.get(this.apiUrl);
  // }


  
}
