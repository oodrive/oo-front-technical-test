import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product-service.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrl: './product-form.component.scss',
	standalone: true,
	imports: [
		ReactiveFormsModule,
	],
})
export class ProductFormComponent implements OnInit {
	private readonly formBuilder = inject(FormBuilder);
	private readonly productService = inject(ProductService);
	private readonly router = inject(Router);
	private readonly route = inject(ActivatedRoute);

	@Input() product: any;

	isEditMode = this.router.url.includes('/edit');

	ngOnInit() {
		this.route.data.subscribe(data => {
			const product = data['product'];
			if (product) {
				this.productForm.setValue(product);
			}
		});
	}

	productForm = this.formBuilder.group({
		id: [{ value: Math.floor(Math.random() * 1000), disabled: !this.isEditMode }],
		name: ['', [Validators.required, Validators.minLength(3)]],
		description: [''],
		price: [0, [Validators.required, Validators.min(1)]],
		image: [this.randomImage]
	});

	get randomImage() {
		return `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
	}

	submit() {
		if (this.isEditMode) {
			this.update();
		} else {
			this.save();
		}
	}

	private save() {
		console.log('Form submitted:', this.isEditMode, this.productForm.value);
		this.productService.saveProduct(this.productForm.value as any)
			.subscribe({
				next: (product) => {
					this.router.navigate(['/products']);
				},
				error: (error) => {
					console.error('Error saving product:', error);
				}
			});
	}

	private update() {
		console.log('Updating product:', this.isEditMode, this.productForm.value);
		this.productService.updateProduct(this.productForm.value as any)
			.subscribe({
				next: (product) => {
					this.router.navigate(['/products']);
				},
				error: (error) => {
					console.error('Error updating product:', error);
				}
			});
	}

	goBack() {
		this.router.navigate(['/products']);
	}
}
