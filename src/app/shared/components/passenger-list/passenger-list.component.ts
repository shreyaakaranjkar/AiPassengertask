import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../interface/ipassenger';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit, DoCheck{
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.count = this.passengerList.reduce((acc,cv)=>{
      if(cv.checkedIn){
        acc++
      }
      return acc
  },0)
  }
  ngOnInit() {
    // throw new Error('Method not implemented.');
    // this.count = this.passengerList.reduce((acc,cv)=>{
    //     if(cv.checkedIn){
    //       acc++
    //     }
    //     return acc
    // },0)

  }

  count!:number
  // passengerCount: number = 0;

  // checkIn() {
  //   // Increment passenger count
  //   this.passengerCount++;
  // }

  passenger! : Ipassenger

  
  @Input() passengerList : Array<Ipassenger> = []
  
  val!:string

  @Input() singleobj! : Ipassenger;

}
