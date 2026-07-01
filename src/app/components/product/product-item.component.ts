import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product',
	standalone: false,
	templateUrl: './product-item.component.html',
	styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
	private readonly router = inject(Router);

	@Input() product: any;
	@Input() isLoading = false;

	@Output() addToCart = new EventEmitter<any>();
	@Output() deleteProduct = new EventEmitter<number>();
	@Output() editProduct = new EventEmitter<number>();

	navigateToDetails(productId: number) {
		console.log(`Show details for product ID: ${productId}`);
		this.router.navigate(['/products', productId]);
	}
}
