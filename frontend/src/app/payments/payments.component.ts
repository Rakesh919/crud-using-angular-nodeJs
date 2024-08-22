import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StudentsService } from '../service/students.service';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [MatIconModule, CommonModule,SearchBarComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css',
})
export class PaymentsComponent {
  active: boolean = false;

  students :any[] = [];

  response:any[]=[];
  constructor(private studentService: StudentsService) {}

    onSubmit(){
      this.active =!this.active;
      console.log('button clicked')

      this.studentService.fetchStudents().subscribe({

        next:(res:any)=>{
          console.log(res);
          let {students_list} =res;
          this.students = students_list;
        },
        error:(res:any)=>{
          console.log(res);
        }
      })
    }



  }

