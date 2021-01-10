import { AdminComponent } from './components/admin/admin.component';
import { TrescortesComponent } from './trescortes/trescortes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'trescortes',
  component: TrescortesComponent
}, {
  path: 'admin',
  component: AdminComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
