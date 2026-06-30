import { Pipe } from '@angular/core';

@Pipe({
	name: 'totalPrice',
	standalone: true
})
export class TotalPricePipe {
	transform(products: { price: number }[]): number {
		return products.reduce((total, product) => total + product.price, 0);
	}
}
