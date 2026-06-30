import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

import { ProductService } from '../../services/product-service.service';
import { Product } from '../products-list/models/product';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<Product | undefined> {
	private readonly productService = inject(ProductService);

	resolve(route: ActivatedRouteSnapshot): Observable<Product | undefined> {
		let id = route.paramMap.get('id');
		if (id != null) {
			return this.productService.getProductById(+id);
		}
		else {
			return EMPTY;
		}
	}
}
