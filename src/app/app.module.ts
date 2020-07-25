import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ListsComponent } from './lists/lists.component';
import { ListModalComponent } from './list-modal/list-modal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAuthInterceptor } from './interceptors/jwt-auth.interceptor';
import { JwtResponseInterceptor } from './interceptors/jwt-auth-response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    ListsComponent,
    ListModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtResponseInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
