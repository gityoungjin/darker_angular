import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-post-logger',
  templateUrl: './post-logger.component.html',
  styleUrls: ['./post-logger.component.scss']
})
export class PostLoggerComponent implements OnChanges {

  @Input() size = 0;
  @Input() title = '';
  changeLog: string[] = [];


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const log: string[] = [];
    for (const propName in changes) {
      if(propName !== 'size'){
        continue;
      }
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`post size changed from ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`post size changed from ${from} to ${to}, title: ${this.title}`);
      }
      this.changeLog.push(log.join(', '));
    }
  }

}
