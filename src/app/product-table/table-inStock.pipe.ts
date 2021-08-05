import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'inStock'
})
export class InStockPipe implements PipeTransform {
    transform(items: any[], isInStock: boolean): any[] {
        if (!items) return [];

        return items.filter(it => {
            return it.inStock;
        });
    }
}