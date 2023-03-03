import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BoardComponent } from './pages/board/board.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavComponent } from './layouts/nav/nav.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BodyComponent } from './layouts/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    NotFoundComponent,
    BoardComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
