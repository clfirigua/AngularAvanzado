import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NotPagesFoundComponent } from './pages/not-pages-found/not-pages-found.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'',
  component:PagesComponent,
  children:[
    {path:'dashboard',component:DashBoardComponent},
    {path:'grafica1',component:Grafica1Component},
    {path:'progress',component:ProgressComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  ]
  },

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'**',component:NotPagesFoundComponent},
  // {path:'',redirectTo:'/dashboard',pathMatch:'full'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
