import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  title = "Values are coming from service"
  a:number=50
  b:number=30
  constructor() { }
}
