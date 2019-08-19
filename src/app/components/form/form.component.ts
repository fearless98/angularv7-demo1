import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    username : '',
    gender: '2',
    cityList: [ '成都', '北京', '上海', '深圳', '广州'],
    city: '成都',
    hobby: [{
      title: 'eat',
      checked: false
    }, {
        title: 'sleep',
        checked: false
    }, {
      title: 'code',
      checked: true
    }],
    mark: ''
  };
  constructor() { }

  ngOnInit() {
  }

  doSubmit() {
    // 方法一：jquery dom操作
    // let usernameDom : any = document.getElementById("username");
    // console.log(usernameDom.value);

    // 方法二：双向数据绑定
  console.log(this.peopleInfo);

  }
}

