import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(items:any[], searchText: string): any {
    
    if(!items) return []
    if(!searchText) return items
    else {
     let newitems=items.filter(items=>{
       if(Object.values(items).toString().toLowerCase().indexOf(searchText)>0)
         return items
     }) 
     if(!newitems)return items
     else return newitems


    }
    
    
    return null;
  }

}
