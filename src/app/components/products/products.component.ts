import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {DataService} from '../../service/data.service';
import {Product} from '../../product';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: any;
  product = new Product;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData() {
    console.log('Liste des produits');
    this.dataService.getData().subscribe(res=>{
      console.log(res);
      this.products = res;
    })
  }

  insertData() {
    //console.log(this.product);
    this.dataService.insertData(this.product).subscribe(res=>{
      //console.log(res);
      this.getProductData();
    })
  }

  deleteData(id: any) {
    console.log(id);
    this.dataService.deleteData(id).subscribe(res=>{
      //console.log(res);
      this.getProductData();
    })
  }
}
