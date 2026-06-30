import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private readonly http = inject(HttpClient);

	getProducts(): Observable<any> {
		return this.http.get('http://localhost:3000/products');
	}

	searchProducts(query: string): Observable<any> {
		return this.http.get(`http://localhost:3000/products?q=${query}`);
	}

	getProductById(id: number): Observable<any> {
		return this.getProducts()
			.pipe(
				map((products: any[]) => products.find((product: any) => product.id === id))
			);
	}

	saveProduct(product: any): Observable<any> {
		return this.http.post('http://localhost:3000/products', product);
	}

	updateProduct(product: any): Observable<any> {
		return this.http.put(`http://localhost:3000/products/${product.id}`, product);
	}

	deleteProduct(id: number): Observable<boolean> {
		console.log('Deleting product with ID:', id);
		return this.http.delete<boolean>(`http://localhost:3000/products/${id}`)
			.pipe(
				map(() => true),
				catchError(() => of(false))
			);
	}
}
