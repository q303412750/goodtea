import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class StoreService {

        constructor(private http:Http) { }


      //   getProducts():Observable<Product[]>{
      //     return this.http.get("http://localhost:8000/api/products")
      //       .map(res=>res.json())
      // }
    
        getData():Observable<GoodTea[]>{
          console.log("胡汉三又进来了")
          return this.http.get("11")
          .map(res=>res.json())
        }
     

      }


  
   



export class GoodTea{
  constructor(
    public img:string,
    public title:string,
    public id:number,
    public target:number

        ){   }

  }
