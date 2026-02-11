import { Routes } from '@angular/router';
import { LayoutComponent } from './widgets/layout/layout.component';
import { DashboardComponent } from './widgets/dashboard/dashboard.component';
import { ProfileComponent } from './widgets/profile/profile.component';
import { AdmissionsComponent } from './widgets/admissions/admissions.component';
import { StudentsComponent } from './widgets/students/students.component';
import { ParentsComponent } from './widgets/parents/parents.component';
import { AttendanceComponent } from './widgets/attendance/attendance.component';
import { AcademicsComponent } from './widgets/academics/academics.component';
import { NoticesComponent } from './widgets/notices/notices.component';
import { ReportsComponent } from './widgets/reports/reports.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./widgets/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'admissions', component: AdmissionsComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'parents', component: ParentsComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'academics', component: AcademicsComponent },
      { path: 'notices', component: NoticesComponent },
      { path: 'reports', component: ReportsComponent },
    ],
  },
];
