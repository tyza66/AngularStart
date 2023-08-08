import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg1 = 'Hello World';
  msg2 = `<h1>Hello World</h1>`;
  img = "https://avatars.githubusercontent.com/u/83948628?v=4";
  isDisabled = true;
  list = ['a', 'b', 'c'];
  isShow = false;
  num = 3;
  put = '';

  giao(){
    alert('Giao');
  }
}
