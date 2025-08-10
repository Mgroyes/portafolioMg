// src/app/pages/dashboard/dashboard.routes.ts

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'servicios', pathMatch: 'full' },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'portafolio', component: PortafolioComponent },
      { path: 'testimonios', component: TestimoniosComponent },
    ],
  },
];
