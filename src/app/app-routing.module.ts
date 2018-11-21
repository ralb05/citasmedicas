import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppMainComponent} from './shared/app-main/app-main.component';
import {HomeComponent} from './home/home.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {SpecialistsComponent} from './specialists/specialists.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PricesComponent} from './prices/prices.component';

const routes = [
  // App routes goes here here
  {
    path: 'modulos', component: AppMainComponent,
    children: [
       {path: 'citas', component: AppointmentsComponent},
       {path: 'especialistas', component: SpecialistsComponent},
       {path: 'medicoencasa', component: HomeComponent},
       {path: 'cotizaciones', component: PricesComponent}
    ]
  },
  //no layout routes
   {path: '', component: DashboardComponent}
];

@NgModule({
            imports: [
              RouterModule.forRoot(routes)
            ],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
