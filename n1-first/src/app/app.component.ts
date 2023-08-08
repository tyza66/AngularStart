import { Component } from '@angular/core';

@Component({
  //指定的是html中的标签名
  selector: 'app-root',
  //指定的是html模板
  templateUrl: './app.component.html',
  //指定的是css样式
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'n1-first';
  hello = 'Hello World';
}
