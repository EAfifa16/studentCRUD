import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = "http://localhost:8080/student"

  constructor(private http: HttpClient) { }

  /*
  all the services return Observable<any> type, 
  if we know the return type then use that
  */ 

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/getAllStudents`);
    //http://localhost:8080/student/getAllStudent
  }

  getStudent(sid: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/getStudent/${sid}`);
    //http://localhost:8080/student/getStudent/{sid}
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/addStudent`, student);
    //http://localhost:8080/student/addStudent
  }

  updateStudent(sid: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/updateStudent/${sid}`, student);
    //http://localhost:8080/student/updateStudent/{sid}
  }

  deleteStudent(sid: number): Observable<Student> {
    return this.http.delete<Student>(`${this.baseUrl}/deleteStudent/${sid}`);
    //http://localhost:8080/student/deleteStudent/{sid}
  }

}

//http://localhost:8080/student/addUpdateStudent/{sid}