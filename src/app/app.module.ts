import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { ItemComponent } from './components/product/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderComponent } from './pages/order/order.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ProductsComponent,
        ItemComponent,
        HomeComponent,
        NotFoundComponent,
        ProductDetailsComponent,
        OrderComponent,
        AboutUsComponent,
        AddToCartComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
