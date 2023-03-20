import { Directive, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/my-post/Post';

let id = 1;

@Directive({
  selector: '[appMyBoard]'
})
export class MyBoardDirective implements OnInit, OnDestroy {
  @Input() id = id++;
  @Output() postLiked = new EventEmitter<Post>();
  @Output() postDeleted = new EventEmitter<number>();
  constructor() { }

  ngOnInit(){
    console.log(`MyBoardDirective ${this.id} created`);
  }

  ngOnDestroy(){
    console.log(`MyBoardDirective ${this.id} destroyed`);
  }

}
