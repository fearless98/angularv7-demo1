import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyword: string;
  public historyList: any[] = [];
  doSearch(){
	  //判断列表中是否已存在该keyword 不存在才进行添加
	  //console.log(this.keyword);
	  if (this.historyList.indexOf(this.keyword) == -1) {
		  this.historyList.push(this.keyword);
	  }
	  this.keyword = '';
  }
  deleteHistoryList(key){
	this.historyList.splice(key, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
