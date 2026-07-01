import { catchError, EMPTY } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../../components/cart/cart.service';
import { ProductItemModule } from '../../components/product/product-item.module';
import { ProductService } from '../../services/product-service.service';

@Component({
	selector: 'app-products-list',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ProductItemModule,
	],
	providers: [
		ProductService,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './products-list.component.html',
	styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
	products: any[] = [];
	searchTerm = '';
	showOutOfStock = true;
	isLoading = false;

	constructor(
		private productService: ProductService,
		private cartService: CartService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.loadProducts();

		// Refresh products periodically
		setInterval(() => {
			console.log('[ProductsList] Auto-refreshing products...');
			this.productService.getProducts().subscribe((products: any) => {
				this.products.length = 0;
				this.products.push(...products);
			});
		}, 5000);
	}

	loadProducts(): void {
		this.productService.getProducts()
			.subscribe((products: any) => {
				this.products = products;
				console.log('Products loaded:', products);
			});
	}

	onSearch(): void {
		this.productService.searchProducts(this.searchTerm)
			.subscribe((products: any) => {
				this.products.length = 0;
				this.products.push(...products);
				console.log('Search results:', products);
			});
	}

	resetSearch(): void {
		this.searchTerm = '';
		this.loadProducts();
	}

	addToCart(product: any): void {
		this.cartService.addProduct(product);
	}

	addNewProduct(): void {
		this.router.navigate(['/products', 'new']);
	}

	editProduct(id: number): void {
		this.router.navigate(['/products', 'edit', id]);
	}

	deleteProduct(id: number): void {
		// todo: Implement delete product functionality
	}
}
