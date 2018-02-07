import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

 const config = "http://localhost:4000/";
//const config = "http://39.106.209.95:4000/";
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

        getLogin(tel,pwd):Observable<Login[]>{
          return this.http.post(config+"login",{
            username:tel,
            userpwd:pwd
          })
            .map(res=>res.json())
        }

       getclassify():Observable<Classify[]>{
        return this.http.get(config+"classify")
        .map(res=>res.json())
       }

     }

export class Classify{
  constructor(
    public data:any,
        ){   }
}
export class Login{
  constructor(
    public tel:any,
    public pwd:any
        ){   }
}
  
export class GoodTea{
  constructor(
    public img:string,
    public title:string,
    public id:number,
    public target:number

        ){   }

  }
