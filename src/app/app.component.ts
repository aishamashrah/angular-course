import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
startDate = new Date(2000,0,1);

  // coreCourse = COURSES[0];
  // rxJsCourse =  COURSES[1]
  // ngRxCourse = COURSES[2]

  onCourseSelected(){
  console.log("card  - button clicked..")
}
}
