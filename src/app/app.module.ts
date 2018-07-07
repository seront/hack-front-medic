import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatSliderModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { HttpClientModule } from '@angular/common/http';
import { ServiceCardService } from './services/service-card.service';
import { AppComponent } from './app.component';
import 'hammerjs';

// Micro-Components

import { CardComponent } from './micro-components/card/card.component';

import {
  AgmCoreModule
} from '@agm/core';
import { UserProfileComponent } from './micro-components/user-profile/user-profile.component';
import { TableListComponent } from './micro-components/table-list/table-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CardComponent,
    UserProfileComponent,
    TableListComponent,
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule
  ],
  exports: [
    BsDropdownModule,
    TooltipModule
  ],
  providers: [ServiceCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
