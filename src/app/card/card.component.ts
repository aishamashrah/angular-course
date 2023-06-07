import { Component, Input, OnInit } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
@Input()
course:Course;

@Input()
cardIndex: number;
CourseSelected= new EventEmitter<Course>();

constructor(){}

ngOnInit(){

}
isImageVisible(){
  return this.course && this.course.iconUrl;``
}
onCourseViewed(){
console.log("card compounts - button clicked..")
this.CourseSelected.emit(this.course);
}

CardClasses(){
  if(this.course.category == 'BEGINNER'){
return ['beginner'];
    
   
  }
}
CardStyles(){
  return{
    'background-image': 'url(' + this.course.iconUrl +')',
  }
  
  
}
}
