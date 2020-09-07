import { AssesmentService } from './../assesment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio'
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  charcount:number=0;
  codcount:number=0;
  engcount:number=0;
  isClicked=false;
  answer1:String;
  answers1: string[] = ['a', 'b', 'c', 'd'];
  bgcolour='white';
  realanswer1='a';
  constructor(private route:Router,private assesmentService:AssesmentService) { }
  evaluateCodes()
  {
    if(this.realanswer1==this.answer1)
    this.codagree();
    
  }
  character=[
    {
      q:"Are u intrested in joining group events",
    },
    {
      q:"Are u intrested to go out with group"
    },
    {
      q:"Will u speak with lot of people in family events"
    }
  ];
  coding=[{
    q:"IS this Declaration correct: -int func();"
  },
    {
      q:"Similarity between Union, structure and enum are helpful in defining new datatypes ?"},
    {
      q:"C was primarily developed as system programming language"},
      {
        q:"The function fopen() with mode'r+' is for reading and writing :"
      }
    ];
  english=[{
    q:"IS this sentence correct: The Chairman is ill and we will have to put off the meeting for few days."
  },
    {
      q:"IS this sentence correct: The cat and the dog have a common enemy is the rat."
    },
    {
      q:"IS this sentence correct: He told me that he had finished watching the movie."}];

  ngOnInit(): void {
    
  }
  charagree(c){
    c.clicked=!c.clicked;
    if(c.clicked){
      this.charcount=this.charcount+1;
      this.bgcolour='#53a7a8';
    }
    else{
      this.charcount=this.charcount-1;
      this.bgcolour='white';
      c.clicked=false;
    }
    console.log(this.charcount);
  }
  disagree(){

  }
  codagree(){

    this.codcount=this.codcount+1;
    console.log(this.codcount);
  }
  engagree(){
    this.engcount=this.engcount+1;
    console.log(this.engcount);
  }
  evaluate(){
    
    this.assesmentService.updateProgress({cc:this.charcount,cdc:this.codcount,ec:this.engcount});
    this.evaluateCodes();
    this.route.navigate(["progress"]);
    
  }
}

