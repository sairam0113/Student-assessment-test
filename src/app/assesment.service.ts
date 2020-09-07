import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssesmentService {
  pObj;
  constructor() { }
  updateProgress(progObj){
    this.pObj=progObj;
  }
  getProgress(){
    return this.pObj;
  }
  
}
