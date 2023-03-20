import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyBoardDirective } from '../pages/my-board/my-board.directive';
import { Post } from './Post';

let id = 1;
@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss'],
})

export class MyPostComponent {
  
  @Input('board') boardName = '';
  // @Input() post!: Post;
  @Output() postLiked = new EventEmitter<Post>();
  // likes = 0;
  @Input() 
  get post(): Post { return this._post;}
  set post(post: Post) {
    this._post = post;
    this._post.title = this.titleSummary(post.title);
    this._post.id = id++;
    this._post.likes = 0;
  }
  private _post = {} as Post;

  @Output() postDeleted = new EventEmitter<number>();

  titleSummary (postTitle:string): string {
    return (postTitle && postTitle.length > 10) ? postTitle.substr(0, 10) + '...' : postTitle;
  }

  postDelete (id:number): void {
    this.postDeleted.emit(id);
  }
  increaseLikes(): void {
    // this.likes++;
    this.post.likes = (this.post.likes??0) + 1;
    this.postLiked.emit(this.post);
    console.log(this.post);
  }
}  
