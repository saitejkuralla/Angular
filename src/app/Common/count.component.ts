import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'count',
  templateUrl: './count.component.html'
 
})

export class CountComponent {

  selectdRadioButtopnValue:string="All";

  @Output()
  countRadioButtonChange:EventEmitter<string>=new EventEmitter<string>();

    @Input()
   all:number;
   @Input()
   brand:number;

   onRadioButtonSelectedChange()
   {
     this.countRadioButtonChange.emit(this.selectdRadioButtopnValue)
    //  console.log(this.selectdRadioButtopnValue)

   }

  }