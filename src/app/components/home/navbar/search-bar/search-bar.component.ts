import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
   
  search!: string;
  result!: string;

  constructor() { }

  ngOnInit(): void {
  
  }
  searchBtn(){
      this.result = this.search;
  }

}
