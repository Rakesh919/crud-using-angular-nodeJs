import { Routes } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { ComponentsComponent } from './components/components.component';
import { AddStudentComponent } from './students-list/add-student/add-student.component';
import { PaymentsComponent } from './payments/payments.component';
import { UpdateStudentComponent } from './students-list/update-student/update-student.component';
import { ReportComponent } from './report/report.component';
import { CoursesComponent } from './courses/courses.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    {path:'student',component:StudentsListComponent},
    {path:'component',component:ComponentsComponent},
    {path:'addStudent',component:AddStudentComponent},
    {path:'payments',component:PaymentsComponent},
    {path:'edit',component:UpdateStudentComponent},
    {path:'report',component:ReportComponent},
    {path:'course',component:CoursesComponent},
    {path:'settings',component:SettingsComponent}
];
