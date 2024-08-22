import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from '../../service/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {

  constructor(private service:StudentsService ,public fb:FormBuilder, private router:Router){}
studentForm :any

name:string='';
email:string='';
phone:string='';
enrollment_number:string='';
date_of_admission:string='';

  ngOnInit(){
    this.studentForm = this.fb.group({
      name:[],
      phone:[],
      email:[],
      enrollment_number:[],
      date_of_admission:[]
    })
   this.getUser(this.service.getData())
  }


  onSubmit(data:any){
    this.service.updateUsers(data).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.router.navigate(["./student"])
      },
      error:(res:any)=>{
        console.log(res);
      }
    })
  }

  getUser(userId:string){
    this.service.getUser(userId).subscribe({
      next:(res:any)=>{
        console.log("Response form getUser from edit section ",res);
        let {userDetails}= res;
        this.name = userDetails.name;
        this.email = userDetails.email;
        this.phone = userDetails.phone;
        this.enrollment_number= userDetails.enrollment_number;
        this.date_of_admission = userDetails.date_of_admission
      },
      error:(res:any)=>{
        console.log(res);
      }
    })
  }
}
