import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  categories = ["แมส", "กระเป๋า", "เสื้อผ้า", "รองเท้า"];
  constructor() { }

  ngOnInit(): void {
  }

}
