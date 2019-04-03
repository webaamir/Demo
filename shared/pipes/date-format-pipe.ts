import { Pipe, PipeTransform } from '@angular/core'
import * as moment from 'moment'

@Pipe({
   name: 'date-format'
})
export class DateFormatPipe implements PipeTransform {
   transform(date: any, format?: any): any {
     let d = new Date(date)
     return moment(d).format(format)
   }
}