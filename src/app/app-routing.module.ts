import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBrandComponent } from './pages/brand/create-brand/create-brand.component';
import { FindBrandComponent } from './pages/brand/find-brand/find-brand.component';
import { ListBrandComponent } from './pages/brand/list-brand/list-brand.component';
import { UpdateBrandComponent } from './pages/brand/update-brand/update-brand.component';
import { CreateStatusComponent } from './pages/status/create-status/create-status.component';
import { FindStatusComponent } from './pages/status/find-status/find-status.component';
import { ListStatusComponent } from './pages/status/list-status/list-status.component';
import { UpdateStatusComponent } from './pages/status/update-status/update-status.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'ListBrand', component: ListBrandComponent },
  { path: 'NewBrand', component: CreateBrandComponent },
  { path: 'UpdateBrand/:id', component: UpdateBrandComponent },
  { path: 'SearchBrand', component: FindBrandComponent },

  { path: 'ListStatus', component: ListStatusComponent },
  { path: 'NewStatus', component: CreateStatusComponent },
  { path: 'UpdateStatus/:id', component: UpdateStatusComponent },
  { path: 'SearchStatus', component: FindStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
