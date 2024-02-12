import { Pipe, PipeTransform } from '@angular/core';
import { Ipassenger } from '../../interface/ipassenger';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: boolean):any {
    let totalCount!:number;
    console.log(value);
    // do(value){
    //   totalCount = totalCount++
    // }
    // while(value>1)

    // if(value){
    //   for(let i=true;i===value;){
    //     totalCount++;
    //   }
    // }
    
    console.log(totalCount)
    return value;
  }

}
