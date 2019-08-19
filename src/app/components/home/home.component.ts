import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public flag = true;
	// public title = 'This is a title';
	// public flag = true;
	// public orderStatus = 3; // 1已支付 2支付且确认 3已发货  4已收货 其它无效
	// public keywords = '这是默认的keywords值';
	// public list: any[] = [
	// 	{
	// 		title: 'car',
	// 		price: 45
	// 	},
	// 	{
	// 		title: 'phone',
	// 		price: 0.3
	// 	},
	// 	{
	// 		title: 'book',
	// 		price: 0.1
	// 	}
	// ];

	// public attr = 'orange';

	// public today: any = new Date();
	constructor() {
		// console.log(this.today);
	}

	ngOnInit() {
		// 在这个生命周期内只是组件和指令初始化完成 并不是真正的dom加载完成
		// 但是也可以在此获取dom节点 会有问题 不推荐
		// 1 通过原生js获取
		const getBox = document.getElementById('box');
		console.log(getBox.innerHTML);
		getBox.style.color = 'red';

		// 这样就获取不到
		// const getBox1 = document.getElementById('box2');
		// console.log(getBox1.innerHTML);
		// getBox1.style.color = 'blue';
	}
	ngAfterViewInit() {
		//  视图加载完成以后的方法 dom加载完成 建议把dom操作放在这里
		const getBox1 = document.getElementById('box2');
		console.log(getBox1.innerHTML);
		getBox1.style.color = 'blue';
	}
	// 	run() {
	// 		alert('点击方法');
	// 	}
	// 	getDate() {
	// 		alert(this.title);
	// 	}
	// 	setDate() {
	// 		this.title = 'this is the changed title';
	// }
	// 	keyUp(e) {
	// 		if (e.keyCode == 13) {
	// 			console.log('按下回车');
	// 			console.log(e.target.value);
	// 		} else {
	// 			console.log(e.keyCode);
	// 		}
	// 	}

	// 	runEvent(e) {
	// 		let dom: any = e.target;
	// 		dom.style.color = 'orange';
	// 	}
	// 	changeKeywords() {
	// 		this.keywords = '这是改变后的keywords';
	// 	}
	// 	getKeywords() {
	// 		console.log(this.keywords);
	// 	}
}
