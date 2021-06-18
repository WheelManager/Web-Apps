import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { ListBrandComponent } from './pages/brand/list-brand/list-brand.component';
import { CreateBrandComponent } from './pages/brand/create-brand/create-brand.component';
import { UpdateBrandComponent } from './pages/brand/update-brand/update-brand.component';
import { FindBrandComponent } from './pages/brand/find-brand/find-brand.component';

import { ListStatusComponent } from './pages/status/list-status/list-status.component';
import { CreateStatusComponent } from './pages/status/create-status/create-status.component';
import { UpdateStatusComponent } from './pages/status/update-status/update-status.component';
import { FindStatusComponent } from './pages/status/find-status/find-status.component';

import { ListVehicleTypeComponent } from './pages/vehicle-type/list-vehicle-type/list-vehicle-type.component';
import { UpdateVehicleTypeComponent } from './pages/vehicle-type/update-vehicle-type/update-vehicle-type.component';
import { FindVehicleTypeComponent } from './pages/vehicle-type/find-vehicle-type/find-vehicle-type.component';
import { CreateVehicleTypeComponent } from './pages/vehicle-type/create-vehicle-type/create-vehicle-type.component';


@NgModule({
  declarations: [
    AppComponent,
    ListBrandComponent,
    CreateBrandComponent,
    UpdateBrandComponent,
    FindBrandComponent,

    ListStatusComponent,
    CreateStatusComponent,
    UpdateStatusComponent,
    FindStatusComponent,

    ListVehicleTypeComponent,
    UpdateVehicleTypeComponent,
    FindVehicleTypeComponent,
    CreateVehicleTypeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
