import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[]=[];
  
  constructor() { }

  add(todo:Todo){
    this.todos.push(todo);
    return this.todos;
  }

  delete(index:number){
    this.todos.splice(index,1);
    return this.todos; 
  }

  all(){
    return this.todos;
  }

}
