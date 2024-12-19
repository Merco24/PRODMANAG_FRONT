import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/products');
  }
  insertData(data: Product) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addProduct', data);
  }
}
