import { Component, Input, OnInit } from '@angular/core';
import { FurnitureComponent } from '../furniture/furniture.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() furnitureList:any;
  constructor() { }

  ngOnInit(): void {
  }

}
