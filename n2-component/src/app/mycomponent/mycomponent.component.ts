import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
  info = 'giao！';
  // 声明接收父组件传递的数据
  @Input() hello: string | undefined;
  @Input('world') world1: string | undefined;
  // 声明一个事件，用于向父输出数据
  @Output() onVoted = new EventEmitter<boolean>();


  vote(front: boolean){
    // 向父组件传递数据
    this.onVoted.emit(front);
  }
}
