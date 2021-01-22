import { StudentService } from './../../service/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  student: Student;
  sid: number;

  constructor(private service: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sid = this.activatedRoute.snapshot.params['sid'];
    this.loadStudent(this.sid);
  }

  loadStudent(sid: number) {
    this.student = new Student();
    this.service.getStudent(this.sid).subscribe(data => {
      this.student = data;
      console.log("student details : ", this.student);
    });
  }

  updateStudentComponent() {
    this.router.navigate(['/update', this.sid]);
  };

  homePageComponent() {
    this.router.navigate(['/home']);
  }

}