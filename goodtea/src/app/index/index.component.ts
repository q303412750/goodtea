import { Component, OnInit } from '@angular/core';
import { GoodTea, StoreService } from '../service/store.service';
import "rxjs/Rx"
 
@Component({
  selector: 'app-index', 
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private adlist:any;
  private title:string = "good tea";
  private contlist:any;
  constructor(private StoreService:StoreService) {

   }

  ngOnInit() {
    this.StoreService.getData().subscribe((data)=>{
      this.adlist = data[0]  //桥梁
      console.log(data)
      this.contlist = this.adlist.data[1].ad
      this.adlist = this.adlist.data[0].ad
      
      console.log(this.contlist)
      }
    ) 
    setTimeout(() => {
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
      });
    }, 1500);
  }
  

}
