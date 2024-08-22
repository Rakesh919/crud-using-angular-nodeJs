import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  studentsList: any[] = [];
  private data: any;

  private apiUrl = 'http://localhost:8080/users';
  private api = 'http://localhost:8080/list'
  constructor(private http: HttpClient) {}

  fetchStudents(): Observable<any> {
    return this.http.get(this.api);
  }

  storeStudents(students: any[]): void {
    this.studentsList = students;
  }

  deleteUser(userId: string): Observable<any> {
    const options = {
      body: { userId },
    };
    return this.http.delete(this.apiUrl, options);
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  updateUsers(value: any): Observable<any> {
    let userId = this.data;
    console.log(userId);
    let body = { ...value, userId };
    return this.http.put(this.apiUrl, body);
  }

  getUser(userId:any): Observable<any> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get(this.apiUrl,{params});
  }
}
