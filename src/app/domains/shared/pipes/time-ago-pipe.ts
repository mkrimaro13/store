import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';
@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    const today = new Date();
    return formatDistance(today, value, { locale: es });
  }
}