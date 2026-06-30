import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const PRODUCTS_STORAGE_KEY = 'selectedProducts';

@Injectable({ providedIn: 'root' })
export class CartService {
	private productCountSubject = new BehaviorSubject<number>(this.getProductCountFromStorage());
	public productCount$ = this.productCountSubject.asObservable();

	addProduct(event: any) {
		const existingProducts = localStorage.getItem('selectedProducts');
		const selectedProducts = existingProducts ? JSON.parse(existingProducts) : [];
		selectedProducts.push(event);
		localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
		this.updateProductCount();
	}

	clearCart() {
		localStorage.removeItem(PRODUCTS_STORAGE_KEY);
		this.updateProductCount();
	}

	removeFromCart(productId: number) {
		const existingProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
		if (existingProducts) {
			const selectedProducts: any[] = JSON.parse(existingProducts);
			const updatedProducts = selectedProducts.filter((product: any) => product.id !== productId);
			localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(updatedProducts));
			this.updateProductCount();
		}
	}

	private getProductCountFromStorage(): number {
		const storedProducts = localStorage.getItem(PRODUCTS_STORAGE_KEY);
		return storedProducts ? JSON.parse(storedProducts).length : 0;
	}

	private updateProductCount() {
		const count = this.getProductCountFromStorage();
		this.productCountSubject.next(count);
	}
}
