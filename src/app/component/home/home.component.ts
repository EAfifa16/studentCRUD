import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/Student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: Student[];

  constructor(private service: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.service.getAllStudents().subscribe(data => {
      console.log(data);
      this.students = data;
    });
  }

  deleteStudent(sid: number) {
    this.service.deleteStudent(sid).subscribe(data => {
      this.homePageComponent();
    });
  }

  editStudentComponent(sid: number) {
    console.log("edit data : ", sid);
    this.router.navigate(['/edit', sid]);
  }

  updateStudentComponent(sid: number) {
    this.router.navigate(['/update', sid]);
  }

  homePageComponent() {
    this.router.navigate(['/home']);
  }

}