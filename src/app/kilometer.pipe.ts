import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometer'
})
export class KilometerPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if(!value){
      return ' ';
    }

    switch(targetUnits) {
      case 'km':
        return parseInt(value) * 1.60934;
      case 'm':
        return parseInt(value) * 1.60934 * 1000;
      case 'cm':
        return parseInt(value) * 1.60934 * 1000 * 1000;
      default: 
        throw new Error('Target unit is not supported');
    }
  }

}
