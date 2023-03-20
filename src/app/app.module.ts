import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { BoardComponent } from './pages/board/board.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavComponent } from './layouts/nav/nav.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BodyComponent } from './layouts/body/body.component';
import { MyBoardComponent } from './pages/my-board/my-board.component';
import { MyBoardDirective } from './pages/my-board/my-board.directive';
import { ChangeLoggerDirective } from './pages/my-board/change-logger.directive';
import { InputTextComponent } from './input-text/input-text.component';
import { MyPostComponent } from './my-post/my-post.component';
import { PostLoggerComponent } from './post-logger/post-logger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { TimerComponent } from './timer/timer.component';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { TimerPage2Component } from './pages/timer-page2/timer-page2.component';
import { MissionControlComponent } from './pages/mission-control/mission-control.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    BoardComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    BodyComponent,
    MyBoardComponent,
    MyBoardDirective,
    ChangeLoggerDirective,
    InputTextComponent,
    MyPostComponent,
    PostLoggerComponent,
    TimerComponent,
    TimerPageComponent,
    TimerPage2Component,
    MissionControlComponent,
    AstronautComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
