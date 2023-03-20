import { Component, ContentChild, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, Posts } from 'src/app/my-post/Post';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-my-board',
  templateUrl: './my-board.component.html',
  styleUrls: ['./my-board.component.scss'],
  // encapsulation: ViewEncapsulation.None // [None, Emulated ,ShadowDome] css 적용범위 지정
})
export class MyBoardComponent implements OnInit, OnDestroy {

  hero = 'Windstorm';
  power = 5;
  parentMessage: string = "";

  posts = Posts;
  postSize = this.posts.length;
  postTitle = "";
  postContent = "";
  searchText = "";
  board = 'myboard';

  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  constructor() { }

  onPostDeleted(postId: number) {
    this.posts = this.posts.filter(post => post.id !== postId);
    this.postSize = this.posts.length;
  }

  onPostLiked($event: Post) {
    console.log($event);
    this.posts = this.posts.map(post => {
      if (post.id === $event.id) {
        post.likes = $event.likes;
      }
      return post;
    });
  }

  search(text: string) {
    this.searchText = text;
  }

  addPost() {
    this.posts.push({
      title: this.postTitle,
      content: this.postContent
    });
    this.postSize = this.posts.length;
  }

  onSubmit(f: NgForm) {
    console.log('submit');
    console.log(f);
  }

  ngOnInit(): void {
    console.log('MyBoardComponent created');
  }
  ngOnDestroy(): void {
    console.log('MyBoardComponent destroyed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    for (const propName in changes) {
      const changedProp = changes[propName];
    }
  }

  // 모든 상태변화에 반응하여 호출
  ngDoCheck(): void {
    console.log('MyBoardComponent do check');
    console.log(this.posts);
  }

  // 모든 view가 시작되고나서 호출
  ngAfterViewInit(): void {
    console.log('MyBoardComponent view init');
  }

  // view가 변경되고나서 호출
  ngAfterViewChecked(): void {
    console.log('MyBoardComponent view checked');
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    console.log('do something');
    // const c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
    // if (c !== this.comment) {
    //   // Wait a tick because the component's view has already been checked
    //   this.logger.tick_then(() => this.comment = c);
    // }
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    // this.logIt('AfterContentInit');
    // this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    // if (this.prevHero === this.contentChild.hero) {
    //   this.logIt('AfterContentChecked (no change)');
    // } else {
    //   this.prevHero = this.contentChild.hero;
    //   this.logIt('AfterContentChecked');
    //   this.doSomething();
    // }
  }



}
