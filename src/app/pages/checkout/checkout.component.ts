import { Component, Input, OnInit } from '@angular/core';
import { FurnitureComponent } from '../furniture/furniture.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

@Input() Mycart:any;

  constructor() { }

  ngOnInit(): void {
  }

}
