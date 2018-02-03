import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

const config = "http://localhost:4000/";
@Injectable()
export class StoreService {
      
      constructor(private http:Http) { }


      //   getProducts():Observable<Product[]>{
      //     return this.http.get("http://localhost:8000/api/products")
      //       .map(res=>res.json())
      // }
    
        getData():Observable<GoodTea[]>{
          return this.http.get(config+"teaindex")
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
