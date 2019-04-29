import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public flag : boolean = true;
	public orderStatus : number = 3;//1已支付 2支付且确认 3已发货  4已收货 其它无效

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

}
