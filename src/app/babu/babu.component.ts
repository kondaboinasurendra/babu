import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import{environment} from 'src/environments/environment';

@Component({
  selector: 'app-babu',
  templateUrl: './babu.component.html',
  styleUrls: ['./babu.component.css']
})
export class BabuComponent implements OnInit {
  requrl:any=environment.apiUrl+'products'
  product:any=''
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get(this.requrl).subscribe(res=>{
      this.requrl=res;
      console.log(this.requrl)

    })
    
  }
  view(data:any){
    this.product=data;
    console.log(this.product)
  }

}
