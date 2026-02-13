import { Routes } from '@angular/router';
import { LayoutComponent } from './widgets/layout/layout.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

// Admin Components
import { AdminDashboardComponent } from './widgets/admin-dashboard/admin-dashboard.component';
import { AdmissionsComponent } from './widgets/admissions/admissions.component';
import { StudentsComponent } from './widgets/students/students.component';
import { ParentsComponent } from './widgets/parents/parents.component';
import { AttendanceManagementComponent } from './widgets/attendance-management/attendance-management.component';
import { AcademicsComponent } from './widgets/academics/academics.component';
import { NoticesComponent } from './widgets/notices/notices.component';
import { ReportsComponent } from './widgets/reports/reports.component';

// Parent Components
import { ParentDashboardComponent } from './widgets/parent-dashboard/parent-dashboard.component';
import { MyChildComponent } from './widgets/my-child/my-child.component';
import { ParentAttendanceComponent } from './widgets/parent-attendance/parent-attendance.component';
import { ResultsComponent } from './widgets/results/results.component';
import { FeesComponent } from './widgets/fees/fees.component';
import { MessagesComponent } from './widgets/messages/messages.component';
import { ParentNoticesComponent } from './widgets/parent-notices/parent-notices.component';
import { ProfileComponent } from './widgets/profile/profile.component';

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
    canActivate: [authGuard],
    children: [

      // ===== ADMIN ROUTES =====
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      {
        path: 'admissions',
        component: AdmissionsComponent,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      {
        path: 'students',
        component: StudentsComponent,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      {
        path: 'parents',
        component: ParentsComponent,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      {
        path: 'attendance-management',
        component: AttendanceManagementComponent,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      {
        path: 'academics',
        component: AcademicsComponent,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      {
        path: 'notices',
        component: NoticesComponent,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },
      {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [roleGuard],
        data: { role: 'admin' }
      },

      // ===== PARENT ROUTES =====
      {
        path: 'parent-dashboard',
        component: ParentDashboardComponent,
        canActivate: [roleGuard],
        data: { role: 'parent' }
      },
      {
        path: 'my-child',
        component: MyChildComponent,
        canActivate: [roleGuard],
        data: { role: 'parent' }
      },
      {
        path: 'parent-attendance',
        component: ParentAttendanceComponent,
        canActivate: [roleGuard],
        data: { role: 'parent' }
      },
      {
        path: 'results',
        component: ResultsComponent,
        canActivate: [roleGuard],
        data: { role: 'parent' }
      },
      {
        path: 'fees',
        component: FeesComponent,
        canActivate: [roleGuard],
        data: { role: 'parent' }
      },
      {
        path: 'messages',
        component: MessagesComponent,
        canActivate: [roleGuard],
        data: { role: 'parent' }
      },
      {
        path: 'parent-notices',
        component: ParentNoticesComponent,
        canActivate: [roleGuard],
        data: { role: 'parent' }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [roleGuard],
        data: { role: 'parent' }
      }
    ],
  },
];
