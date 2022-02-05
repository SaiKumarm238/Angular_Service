import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../values.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  title:string=""
  a:number=0;
  b:number=0;
  res:number=0

  constructor(private myservise:ValuesService) { }

  ngOnInit(): void {
    this.title=this.myservise.title
    this.a=this.myservise.a
    this.b=this.myservise.b
    this.res= this.myservise.a * this.myservise.b
  }

}
