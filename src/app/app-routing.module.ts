import { BoardComponent } from './pages/board/board.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBoardComponent } from './pages/my-board/my-board.component';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { TimerPage2Component } from './pages/timer-page2/timer-page2.component';
import { MissionControlComponent } from './pages/mission-control/mission-control.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'board', component: BoardComponent },
  { path: 'myboard', component: MyBoardComponent },
  { path: 'timer', component: TimerPageComponent },
  { path: 'timer2', component: TimerPage2Component },
  { path: 'mission', component: MissionControlComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
