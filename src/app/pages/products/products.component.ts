import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    constructor(private http: HttpClient, private router: ActivatedRoute) {}

    products: any[] = [];
    title?: string;

    ngOnInit(): void {
        this.http.get<any[]>('http://localhost:3000/products').subscribe({
            next: (resp) => {
                this.products = resp;
            },
        });

        this.router.data.subscribe({
            next: (resp: Data) => {
                this.title = resp['title'];
            },
        });
    }
}
