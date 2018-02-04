import { Component, OnInit } from '@angular/core';
import * as mui from "../../assets/js/mui.js"
@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    mui.ready(function() {
      mui('.mui-scroll-wrapper').scroll({
          bounce: true,
          indicators: true,
          deceleration:mui.os.ios?0.003:0.0009
      });
      mui('.mui-scroll').on('tap','.mui-control-item:not(.mui-active)',function(){
          mui('.mui-slider').slider().gotoItem(this.getAttribute('data-index'));
      });
  });
  }

}
