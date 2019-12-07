import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/providers',
    pathMatch: 'full'
  },
  {
    path: 'providers',
    component: ListComponent
  },
  {
    path: ':id/update',
    component: UpdateComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
