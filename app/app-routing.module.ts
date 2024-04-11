import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolunkComponent } from './part/rolunk/rolunk.component';
import { RendelesComponent } from './part/rendeles/rendeles.component';
import { NovenyekComponent } from './part/novenyek/novenyek.component';

const routes: Routes = [
  {path:'rolunk', component:RolunkComponent},
  {path:'rendeles', component:RendelesComponent},
  {path:'novenyek', component:NovenyekComponent},
  {path:'', component:RolunkComponent},
  {path:'**', component:RolunkComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
