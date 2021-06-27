import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBrandComponent } from './pages/brand/create-brand/create-brand.component';
import { FindBrandComponent } from './pages/brand/find-brand/find-brand.component';
import { ListBrandComponent } from './pages/brand/list-brand/list-brand.component';
import { UpdateBrandComponent } from './pages/brand/update-brand/update-brand.component';

import { CreateVehicleTypeComponent } from './pages/vehicle-type/create-vehicle-type/create-vehicle-type.component';
import { FindVehicleTypeComponent } from './pages/vehicle-type/find-vehicle-type/find-vehicle-type.component';
import { ListVehicleTypeComponent } from './pages/vehicle-type/list-vehicle-type/list-vehicle-type.component';
import { UpdateVehicleTypeComponent } from './pages/vehicle-type/update-vehicle-type/update-vehicle-type.component';

import { CreateStatusComponent } from './pages/status/create-status/create-status.component';
import { FindStatusComponent } from './pages/status/find-status/find-status.component';
import { ListStatusComponent } from './pages/status/list-status/list-status.component';
import { UpdateStatusComponent } from './pages/status/update-status/update-status.component';

import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { FindCustomerComponent } from './pages/customer/find-customer/find-customer.component';
import { ListCustomerComponent } from './pages/customer/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './pages/customer/update-customer/update-customer.component';

import { ListVehicleComponent } from './pages/vehicle/list-vehicle/list-vehicle.component';
import { CreateVehicleComponent } from './pages/vehicle/create-vehicle/create-vehicle.component';
import { UpdateVehicleComponent } from './pages/vehicle/update-vehicle/update-vehicle.component';
import { FindVehicleComponent } from './pages/vehicle/find-vehicle/find-vehicle.component';

import { ListReservationComponent } from './pages/reservation/list-reservation/list-reservation.component';
import { CreateReservationComponent } from './pages/reservation/create-reservation/create-reservation.component';
import { UpdateReservationComponent } from './pages/reservation/update-reservation/update-reservation.component';
import { FindReservationComponent } from './pages/reservation/find-reservation/find-reservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },

  { path: 'ListBrand', component: ListBrandComponent },
  { path: 'NewBrand', component: CreateBrandComponent },
  { path: 'UpdateBrand/:id', component: UpdateBrandComponent },
  { path: 'SearchBrand', component: FindBrandComponent },

  { path: 'ListVehicleType', component: ListVehicleTypeComponent },
  { path: 'NewVehicleType', component: CreateVehicleTypeComponent },
  { path: 'UpdateVehicleType/:id', component: UpdateVehicleTypeComponent },
  { path: 'SearchVehicleType', component: FindVehicleTypeComponent },

  { path: 'ListStatus', component: ListStatusComponent },
  { path: 'NewStatus', component: CreateStatusComponent },
  { path: 'UpdateStatus/:id', component: UpdateStatusComponent },
  { path: 'SearchStatus', component: FindStatusComponent },

  { path: 'ListCustomer', component: ListCustomerComponent },
  { path: 'NewCustomer', component: CreateCustomerComponent },
  { path: 'UpdateCustomer/:id', component: UpdateCustomerComponent },
  { path: 'SearchCustomer', component: FindCustomerComponent },

  { path: 'ListVehicle', component: ListVehicleComponent },
  { path: 'NewVehicle', component: CreateVehicleComponent },
  { path: 'UpdateVehicle/:id', component: UpdateVehicleComponent },
  { path: 'SearchVehicle', component: FindVehicleComponent },

  { path: 'ListReservation', component: ListReservationComponent },
  { path: 'NewReservation', component: CreateReservationComponent },
  { path: 'UpdateReservation/:id', component: UpdateReservationComponent },
  { path: 'SearchReservation', component: FindReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
