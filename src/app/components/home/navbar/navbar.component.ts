import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  navbars = ["Seller Center", "ขายสินค้ากับช้อปปี้", "ดาวน์โหลด", "ติดตามเรา"];
  constructor() { }

  ngOnInit(): void {
    
  }
  
  
}
