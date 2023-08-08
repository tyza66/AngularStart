import { Component, Input } from '@angular/core';

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
}
