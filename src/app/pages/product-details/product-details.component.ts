import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { ProductItemModule } from '../../components/product/product-item.module';
import { ProductService } from '../../services/product-service.service';

@Component({
	selector: 'app-product-details',
	standalone: true,
	imports: [
		RouterModule,
		ProductItemModule,
	],
	templateUrl: './product-details.component.html',
	styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
	private readonly productService = inject(ProductService);
	private readonly route = inject(ActivatedRoute);
	private readonly router = inject(Router);

	product: any;

	ngOnInit() {
		this.route.data.subscribe(data => {
			if (data['product']) {
				this.product = data['product'];
			}
		});
	}

	fetchProductDetails(productId: number) {
		this.productService.getProductById(productId).subscribe((product: any) => {
			if (product) {
				this.product = product;
			}
		});
	}

	goBack() {
		this.router.navigate(['/products']);
	}
}
