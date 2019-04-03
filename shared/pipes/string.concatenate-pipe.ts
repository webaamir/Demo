import { Pipe } from "@angular/core";

 
@Pipe({
	name : "concatenate"
})
 
export class concatenatePipe {
	transform(val1: string, val2: string){
       		 return val1.concat(' - ', val2 );
	}
}