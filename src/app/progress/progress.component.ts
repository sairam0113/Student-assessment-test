import { AssesmentService } from './../assesment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  n;
  eng=false;
  cod=false;
  get count(){
    this.n=this.assesmentService.getProgress();
    if(this.n.cdc<6){
      this.cod=true;
    }
    if(this.n.ec<3){
      this.eng=true;
    }
    return this.n;
  }
  constructor(private assesmentService:AssesmentService) { }

  ngOnInit(): void {
  }
}
