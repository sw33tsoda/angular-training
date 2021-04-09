import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<subtag></subtag>`,
  // templateUrl: './app.template.html',
  styles:['h1 { color : red;}'],
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  arr:[number,number,number] = [2,5,21];
}
