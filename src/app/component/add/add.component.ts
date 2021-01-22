import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/Student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student: Student = new Student();
  submitted: boolean = false;

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addStudents(this.student);    
  }

  addStudents(student: Student) {
    this.service.addStudent(student).subscribe(data => {
      console.log(data);
    });
    this.submitted = true;
  }

  homePageComponent(){
    this.router.navigate(['/home']);
    this.submitted = false;
  }

}