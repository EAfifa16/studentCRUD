import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/Student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  sid: number;
  student: Student;
  submitted: boolean = false;

  constructor(private service: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.student = new Student();
    this.sid = this.activatedRoute.snapshot.params['sid'];
    this.service.getStudent(this.sid).subscribe(data => {
      console.log(data)
      this.student = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateStudent(this.sid, this.student);
  }

  updateStudent(sid: number, student: Student) {
    this.service.updateStudent(sid, student).subscribe(data => {
      console.log(data);
    });
    this.submitted = true;
  }

  homePageComponent() {
    this.router.navigate(['/home']);
    this.submitted = false;
  }

}