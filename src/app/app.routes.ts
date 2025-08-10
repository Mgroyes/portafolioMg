import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { dashboardRoutes } from './pages/dashboard/dashboard.routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  ...dashboardRoutes,
  { path: '**', redirectTo: '' },
];
