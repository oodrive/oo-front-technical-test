import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { CartService } from './cart.service';

import { TotalPricePipe } from './pipes/total-price.pipe';

@Component({
	selector: 'app-cart',
	standalone: true,
	imports: [CommonModule, TotalPricePipe],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss'
})
export class CartComponent {
	private readonly cartService = inject(CartService);

	selectedProducts = input.required<any[]>();

	clearCart() {
		this.cartService.clearCart();
	}

	removeFromCart(productId: number) {
		this.cartService.removeFromCart(productId);
	}
}
