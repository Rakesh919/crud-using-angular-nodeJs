import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';
import {   RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ComponentsComponent } from '../components/components.component';
import { StudentsService } from '../service/students.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,CommonModule,RouterLink,RouterOutlet,SearchBarComponent,ComponentsComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private studentService:StudentsService){}

   onClick(){
    this.studentService.fetchStudents().subscribe({
      next:(res:any)=>{
        console.log(res);
        let{students_list}= res;
        this.studentService.storeStudents(students_list);
      },
      error:(res:any)=>{
        console.log(res);
      }
    })
   }
}
