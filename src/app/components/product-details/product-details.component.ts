import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        public dataService: DataService
    ) {}

    products: any[] = [];
    product: any = {};

    ngOnInit(): void {
        this.dataService.sendGetRequest('/products').subscribe({
            next: (resp) => {
                this.products = resp;
            },
            complete: () => {
                this.route.params.subscribe({
                    next: (params) => {
                        const productId: number = params['id'];
                        this.product = this.products.find(
                            (product) => product.id == productId
                        );
                    },
                });
            },
        });
    }
}
