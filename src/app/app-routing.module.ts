import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { adminGuard } from './guards/admin.guard';
import { ContentComponent } from './components/content/content.component';
import { userGuard } from './guards/user.guard';



const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'user', component: UserComponent},
  { path: 'admin', component: AdminComponent,canActivate: [adminGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
