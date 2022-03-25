import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import furniture from '../data/furniture.json';
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
 
  cartList:Array<Object>=[];
    
    
  public furnitureList:{
    id:number,
    img:string,
    price:string,
    description:string
  }[]=furniture;
 

  
//const url=`${this.todoAPI}/${todoID}`;
  onAdd(itm:any):void{
 this.cartList.push({
   id:itm.id,
   img:itm.img,
   price:itm.price,
   description:itm.description
});

}
  constructor() {}

  ngOnInit(): void 
  {
  }

}
