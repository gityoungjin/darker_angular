import { Directive, OnChanges } from '@angular/core';

@Directive({
  selector: '[appChangeLogger]'
})
export class ChangeLoggerDirective implements OnChanges {

  constructor() { }

  ngOnChanges(){
    console.log('ChangeLoggerDirective changed');
  }
  
}
