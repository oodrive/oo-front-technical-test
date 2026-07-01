import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'promo',
	standalone: false,
})
export class PromoPipe implements PipeTransform {

	transform(value: any, ...args: unknown[]): any {
		console.log('Applying promo pipe to value:', value);
		return value ? `${value - (value * 0.1)}$` : value;
	}

}
