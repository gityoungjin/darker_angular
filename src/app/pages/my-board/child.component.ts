import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>projected content begins</div>
      <ng-content></ng-content>
    <div>projected content ends</div>
  `,
  styles: [
  ]
})
export class ChildComponent{

  constructor() { }

}
