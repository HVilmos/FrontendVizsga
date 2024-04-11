import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTerm'
})
export class SearchTermPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText) || item.price.toString().includes(searchText);
    });
  }

}
