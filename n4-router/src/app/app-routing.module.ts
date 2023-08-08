import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A1Component } from './a1/a1.component';
import { B2Component } from './b2/b2.component';
import { C3Component } from './c3/c3.component';

const routes: Routes = [
  {
    //注意 路由对象不能以 / 开头
    path: 'a1',
    component: A1Component
  },
  {
    path: 'b2',
    component: B2Component
  },
  {
    //路由里面可以弄重定向
    path: '',
    redirectTo: '/a1',
    pathMatch: 'full'
  },
  {
    //还可以定义动态路由，给页面传参
    path: 'c3/:id',
    component: C3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
