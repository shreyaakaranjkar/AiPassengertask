import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../interface/ipassenger';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent {
// [x: string]: any;

  @Input() passengerCard! : Ipassenger

  // let children = [passengerCard.]
isEditable: boolean = false;
@ViewChild('updatedname') updatedname! : ElementRef;
// @ViewChild('update') update! : ElementRef
@Output() sendDeleteObj : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
  
onEdit(){

    // console.log('edited')
    this.isEditable= true;
  }
  onUpdate(){
    this.isEditable=false;
    console.log(this.updatedname.nativeElement.value);
    this.passengerCard.fullname = this.updatedname.nativeElement.value;
  }
    // let obj : Istudent = {
    //   fname: this.fname.nativeElement.value,
    //   lname: this.lname.nativeElement.value,
    //   email: this.email.nativeElement.value,
    //   contact: +this.contact.nativeElement.value,
    // }

    onRemove(){
      this.sendDeleteObj.emit(this.passengerCard)
    }
  }

