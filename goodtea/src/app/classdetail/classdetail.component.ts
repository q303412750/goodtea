import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classdetail',
  templateUrl: './classdetail.component.html',
  styleUrls: ['./classdetail.component.css']
})
export class ClassdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goBack(){
   
    window.history.go(-1)
  }
}
