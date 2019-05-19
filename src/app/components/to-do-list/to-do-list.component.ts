import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public keyWord: string;
  public todoList: any[] = [];
  constructor() { }

  doAdd(e) {
      if (e.keyCode == 13) {
        if (!this.checkKeywordExist(this.todoList, this.keyWord)) {
        this.todoList.push({
          title: this.keyWord,
          status: 0  //0表示待办事项 1表示已完成事项
        });
        this.keyWord = '';
        }
        else{
          alert(this.keyWord + "已存在");
          this.keyWord = '';
        }
      }
  }
  doDelete(key){
   this.todoList.splice(key, 1);
  }
  checkKeywordExist(todoList: any, keyWord: any){
    if(!keyWord) return false;
    for ( let i = 0; i  < this.todoList.length ; i++) {
      if (todoList[i].title==keyWord) {
        return true;
      }
    }
    return false;
  }
  ngOnInit() {
  }

}
