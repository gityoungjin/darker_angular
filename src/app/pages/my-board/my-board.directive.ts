import { Directive, Input, OnDestroy, OnInit } from '@angular/core';

let id = 1;

@Directive({
  selector: '[appMyBoard]'
})
export class MyBoardDirective implements OnInit, OnDestroy {
  @Input() id = id++;
  constructor() { }

  ngOnInit(){
    console.log(`MyBoardDirective ${this.id} created`);
  }

  ngOnDestroy(){
    console.log(`MyBoardDirective ${this.id} destroyed`);
  }

}
