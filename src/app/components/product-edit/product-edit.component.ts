import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../service/data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Product} from '../../product';

@Component({
  selector: 'app-product-edit',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit{
  id:any;
  data:any;
  product = new Product();
  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getProductById(this.id).subscribe(
      res=>{
        console.log(res);
        this.data = res;
        this.product = this.data;
      }
    )
  }

  updateProduct() {
    this.dataService.updateProduct(this.id, this.product).subscribe(
      res=>{ }
    )
  }

}
