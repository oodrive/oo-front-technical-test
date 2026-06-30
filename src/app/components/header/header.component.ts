import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule, CartComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	readonly cartService = inject(CartService);

	isCartOpen = false;
	cartItemCount$ = this.cartService.productCount$;

	get selectedProducts() {
		console.log('[Header] selectedProducts getter called — change detection cycle');
		const storedProducts = localStorage.getItem('selectedProducts');
		return storedProducts ? JSON.parse(storedProducts) : [];
	}

	toggleCart(): void {
		this.isCartOpen = !this.isCartOpen;
	}

	closeCart(): void {
		this.isCartOpen = false;
	}

}
