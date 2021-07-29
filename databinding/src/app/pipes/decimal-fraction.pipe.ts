import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFraction'
})
export class DecimalFractionPipe implements PipeTransform {

  transform(value: number, numberofDigits: number = 2): any {
    console.log(value, numberofDigits)
    return value.toFixed(numberofDigits)
  }

}
