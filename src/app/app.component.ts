import { AfterViewInit, Component, ElementRef, Query, QueryList, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CardComponent } from './card/card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  courses = COURSES;
startDate = new Date(2000,0,1);

course = COURSES[0];
  // coreCourse = COURSES[0];
  // rxJsCourse =  COURSES[1]
  // ngRxCourse = COURSES[2]
  rate= 0.67;
  onCourseSelected(){
  console.log("card  - button clicked..")

  
}
constructor(){

}

@ViewChild(CardComponent)
cards:QueryList<CardComponent>;


ngafterViewInit(){
  this.cards.changes.subscribe(
    cards => console.log(cards)
  )
}

}
