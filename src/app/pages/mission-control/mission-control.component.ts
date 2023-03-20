import { Component } from '@angular/core';
import { MissionService } from '../../mission.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.scss']
  // 디렉티브를 안붙이고 바로 쓸수있게
  // 너무 많으면 메모리 누수
  // hostDirectives: [{
  //   directive: MyBoardDirective,
  //   inputs: ['id'],
  //   outputs: ['postLiked : liked', 'postDeleted']
  // }]
  // <app-my-post id="..." (liked)="..."> // MyBoardDirective가 포함되어있음
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}
