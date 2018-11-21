import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppMenuComponent, AppSubMenuComponent} from './shared/app.menu.component';
import {AppTopbarComponent} from './shared/app.topbar.component';
import {AppFooterComponent} from './shared/app.footer.component';
import {AppBreadcrumbComponent} from './shared/app.breadcrumb.component';
import {AppRightpanelComponent} from './shared/app.rightpanel.component';
import {AppInlineProfileComponent} from './shared/app.profile.component';
import {BreadcrumbService} from './shared/breadcrumb.service';
import {AppMainComponent} from './shared/app-main/app-main.component';

import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PricesComponent } from './prices/prices.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppTopbarComponent,
        AppFooterComponent,
        AppBreadcrumbComponent,
        AppRightpanelComponent,
        AppInlineProfileComponent,
        HomeComponent,
        AppointmentsComponent,
        SpecialistsComponent,
        DashboardComponent,
        PricesComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        BreadcrumbService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
