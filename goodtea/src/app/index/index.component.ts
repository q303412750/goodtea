import { Component, OnInit } from '@angular/core';
import { GoodTea, StoreService } from '../service/store.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private arr:GoodTea[];

  constructor(private StoreService:StoreService) {

   }

  ngOnInit() {
    this.StoreService.getData().subscribe((data)=>{
      console.log(data)
      
    })
  }

}
