import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { StudentsService } from '../service/students.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [MatIconModule, RouterLink,CommonModule,RouterLinkActive],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css',
})
export class StudentsListComponent implements OnInit {
  students: any[] = [];
  isClicked:boolean=false;

  constructor(private studentService: StudentsService,private router:Router) {}

  ngOnInit() {
  this.getUsers()
  }

  getUsers(){
    this.studentService.fetchStudents().subscribe({
      next: (res) => {
        console.log(res);

        this.students = res.students_list;
      },
    });
  }

  redirectTo(){
   this.router.navigate(['./addStudent'])
  }
  
  deleteUser(userId:string){
    this.isClicked=!this.isClicked;
    this.studentService.deleteUser(userId).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getUsers()
      },
      error:(res:any)=>{
        console.log(res);
      }
    })
    
  }

  sendData(userId:string){
    this.studentService.setData(userId);
    this.router.navigate(['./edit']);
  }
}
