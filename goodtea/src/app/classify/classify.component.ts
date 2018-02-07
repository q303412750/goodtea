import { Component, OnInit } from '@angular/core';
import { Classify, StoreService } from '../service/store.service';
//import * as mui from "../../assets/js/mui.js"
import "rxjs/Rx";

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {
  private navlist:any;
  private title:string = "分 类";
  // private data:data[];
  // private Classify:Classify[];
  constructor(private StoreService:StoreService) { }

  ngOnInit() {
    this.StoreService.getclassify().subscribe((json)=>{
      console.log(json)
      this.navlist = json[0].data;  //桥梁
      console.log(json[0].data)
      }
    )

    mui.ready(function() {
      mui('.mui-scroll-wrapper').scroll({
          bounce: true,
          indicators: true,
          // deceleration:mui.os.ios?0.003:0.0009
      });
      mui('.mui-scroll').on('tap','.mui-control-item:not(.mui-active)',function(){
          mui('.mui-slider').slider().gotoItem(this.getAttribute('data-index'));
      }); 
  });
  }

}
