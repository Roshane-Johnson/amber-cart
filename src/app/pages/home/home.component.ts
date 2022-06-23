import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private dataService: DataService) {}

    products: any[] = [];

    ngOnInit(): void {
        this.dataService.sendGetRequest('/products').subscribe({
            next: (resp) => {
                this.products = resp;
            },
        });
    }
}
