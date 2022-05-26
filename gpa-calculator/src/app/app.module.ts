import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ListComponent } from './components/list/list.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewGradeComponent } from './components/new-grade/new-grade.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListComponent,
    NewUserComponent,
    NewGradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
