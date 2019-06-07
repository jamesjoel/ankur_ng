import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopAreaComponent } from './top-area/top-area.component';
import { SideAreaComponent } from './side-area/side-area.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserServiceService } from './service/user-service.service';
import { UserObservableService } from './service/user-observable.service';
import { NewsComponent } from './news/news.component';
import { LiveNewsService } from './service/live-news.service';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopAreaComponent,
    SideAreaComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService, UserObservableService, LiveNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
