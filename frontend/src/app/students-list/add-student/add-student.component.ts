import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {

  constructor(private service:UsersService, private router:Router){}
 
  onSubmit(
    name: string,
    email: string,
    phone: string,
    enroll: string,
    date_of_admission: string
  ) {
    this.service
      .addUsers(name, email, phone, enroll, date_of_admission)
      .subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (res: any) => {
          console.log(res);
        },
      });
      this.router.navigate(['./student'])
  }

}
