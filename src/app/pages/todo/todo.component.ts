import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todos:Todo[]=[];
   name:String;
   content:String;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todos=this.todoService.all();
  }

  Add(name,content){
    let todo =new Todo(name,content);
    this.todos=this.todoService.add(todo);
    console.log('hani zedetlek');
  }

  delete(i:number){
    this.todos=this.todoService.delete(i);
  }

}
