import { Component, OnInit } from '@angular/core';
import {Task} from '../Task'
import { TaskService } from "../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {
  tasks: Task[] = []
  tasks2: Task[] = []
  
  can:boolean=false;
  constructor( private dataSerive: TaskService) { 
    this.tasks = dataSerive.getTasks();
  }

  ngOnInit() {

  }

  setadd(checked:boolean){
    this.tasks.forEach( task => task.setSelected(checked))
    
    }

  
 
 

  signin(name: string,pass:string ){
    if(name!= null&& pass!= null)
      {
          this.can=true;
        
      }
 }

 // handleKeyUp(ev) {
 //   if (ev.which === 13){
   //   this.addNewTask(ev.target.value);
  //    ev.target.value = ''
   // }
 // }
}
