import { Injectable } from '@angular/core';
import { Task } from '../Task'
@Injectable()
export class TaskService {

  constructor() {
    
   }

    getTasks() {
      const tasks: Task[] = [];

      tasks.push(
        new Task('assets/1.jpg','Samsung Mobile ',20000,false,0),
        new Task('assets/2.jpg','Camera ,Sony',10000,false,0),
        new Task('assets/3.jpg','Mobile abc',300,false,0),
        new Task('assets/4.jpg','Camera aa',200,false,0),
        new Task('assets/5.jpg','head Speakers',200,false,0),
        new Task('assets/6.jpg','Mobile xxx',300,false,0));
      return tasks;
    }
    
      getBill(){
        const tasks: Task[] = [];
        

        
        
        



      }
}
