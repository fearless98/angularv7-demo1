import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public title : string = "This is a title";
	public flag : boolean = true;
	public orderStatus : number = 3;//1已支付 2支付且确认 3已发货  4已收货 其它无效
	public keywords : string = "这是默认的keywords值";
	public list : any[] = [
		{
			title:"car",
			price:45
		},
		{
			title:"phone",
			price:0.3
		},
		{
			title:"book",
			price:0.1
		}
	];

	public attr : string = "orange";

	public today : any = new Date();
  constructor() { 
  	console.log(this.today);
  }

  ngOnInit() {
  }

  run(){
  	alert("点击方法");
  }
  getDate(){
  	alert(this.title);
  }
  setDate(){
  	this.title = "this is the changed title";
  }
  keyUp(e){
  	if(e.keyCode == 13){
  		console.log("按下回车");
  		console.log(e.target.value);
  	}else{
  		console.log(e.keyCode);
  	}
  }

  runEvent(e){
  	var dom : any = e.target;
  	dom.style.color="orange";
  }
  changeKeywords(){
  	this.keywords = "这是改变后的keywords";
  }
  getKeywords(){
  	console.log(this.keywords);
  }
}
