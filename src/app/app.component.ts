import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLearning';
  firstName:string='saitej';
  lastName:string ='Kuralla';

  getFullName():string
  {
    return this.firstName+this.lastName
  }
}
