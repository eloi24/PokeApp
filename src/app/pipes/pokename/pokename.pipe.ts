import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokename'
})
export class PokenamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
