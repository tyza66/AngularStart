import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "";
  msg1 = 'Hello World';
  msg2 = `<h1>Hello World</h1>`;
  img = "https://avatars.githubusercontent.com/u/83948628?v=4";
  isDisabled = true;
  list = ['a', 'b', 'c'];
  isShow = false;
  num = 3;
  put = '';
  seen = true;
  gender = 0;
  hobby = 0;

  giao(){
    alert('Giao');
  }

  currentStyles = {
    'font-style':  true      ? 'italic' : 'normal',
    'font-weight': true ? 'bold'   : 'normal',
    'font-size':   true    ? '24px'   : '12px'
  };

  consle(info: any){
    console.log(info);
  }
}
