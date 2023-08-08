import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'n2-component';
  hello = 'hello';
  world = 'world';
  num = 0;

  onVoted(front: boolean){
    if(front){
      this.num++;
    }else{
      this.num--;
    }
    console.log(this.num);
  }

  say(info:any){
    console.log(info);
  }

  //还有一种极为不建议的父组件访问子组件的方法@ViewChild
}
