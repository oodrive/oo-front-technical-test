import { Routes } from '@angular/router';

import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductResolver } from './pages/product-details/product-resolver';

export const routes: Routes = [
	{ path: '', redirectTo: 'product', pathMatch: 'full' },
	{
		path: 'products',
		loadComponent: () => import('./pages/products-list/products-list.component').then(m => m.ProductsListComponent)
	},
	{
		path: 'products/:id',
		component: ProductDetailsComponent,
		resolve: { product: ProductResolver }
	},
	{
		path: 'products/new',
		loadComponent: () => import('./pages/product-form/product-form.component').then(m => m.ProductFormComponent)
	},
	{
		path: 'products/edit/:id',
		loadComponent: () => import('./pages/product-form/product-form.component').then(m => m.ProductFormComponent),
		resolve: { product: ProductResolver }
	},
	{ path: '**', redirectTo: 'products' },
];
