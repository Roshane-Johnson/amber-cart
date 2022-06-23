import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private REST_API_SERVER = 'http://localhost:3000';
    constructor(private http: HttpClient) {}

    public sendGetRequest(apiPath: string = '/') {
        return this.http.get<any[]>(`${this.REST_API_SERVER}${apiPath}`);
    }
}
