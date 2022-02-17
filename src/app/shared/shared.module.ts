import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumsComponent } from './bread-crums/bread-crums.component';
import { SiderComponent } from './sider/sider.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreadCrumsComponent,
    SiderComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BreadCrumsComponent,
    SiderComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
