import { Component, OnInit } from '@angular/core';
import { StoreService } from '../service/store.service';
import { FormGroup, FormControl ,FormBuilder,Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel:FormGroup;
  private xinxi:any
  private type:number
  constructor(private StoreService:StoreService,fb:FormBuilder) {
    this.formModel = fb.group({
      tel:[],
      pwd:[],
    })
   }

  ngOnInit() {
  }

  goback(){
    window.history.go(-1);
  }

  
  formSubmit(){
    console.log("手机是 :"+this.formModel.get("tel").value);
    console.log("密码是 :"+this.formModel.get("pwd").value);
    var tel=this.formModel.get("tel").value;
    var pwd=this.formModel.get("pwd").value;
    this.StoreService.getLogin(tel,pwd).subscribe((data)=>{
     mui.ready(($)=>{

       console.log(data.type);
       console.log(typeof(data.type));
         switch(data.type){
           case 0:
           $.toast("用户不存在",{ duration:'short', type:'div' });break;
           case 1:
           $.toast("连接成功",{ duration:'short', type:'div' });break;
           case 2:
           $.toast("连接错误",{ duration:'short', type:'div' });break;
           case 3:
           $.toast("密码错误",{ duration:'short', type:'div' });break;
         }
     })

    })
  }
}
