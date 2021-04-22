import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, fName:string): any {

      
 if(!value)return null;
      if(!fName)return value;

      fName= fName.toLowerCase();

      return value.filter(function(data){
          return JSON.stringify(data).toLowerCase().includes(fName);
      });
  }
   
 
}
