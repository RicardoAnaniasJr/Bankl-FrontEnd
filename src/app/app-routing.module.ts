import { AuthGuard } from './account/shared/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './tasks/task/list/list.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'new', component: TaskFormComponent },
      { path: 'edit/:id', component: TaskFormComponent }

    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
