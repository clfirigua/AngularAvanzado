import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotPagesFoundComponent } from './pages/not-pages-found/not-pages-found.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { BreadCrumsComponent } from './shared/bread-crums/bread-crums.component';
import { SiderComponent } from './shared/sider/sider.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotPagesFoundComponent,
    DashBoardComponent,
    BreadCrumsComponent,
    SiderComponent,
    HeaderComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
