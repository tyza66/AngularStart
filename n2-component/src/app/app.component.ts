import { Component } from '@angular/core';

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
}
