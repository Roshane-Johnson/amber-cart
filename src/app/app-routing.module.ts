import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    {
        path: 'products',
        component: ProductsComponent,
        data: { title: 'Products Page' },
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent,
    },
    {
        path: 'order/:id',
        component: OrderComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
