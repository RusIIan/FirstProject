import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  clickMessage(){
    let x = document.querySelector('.createServer');
    let y = document.querySelector('.btn');
    if(x?.innerHTML === "No server was created" && y?.innerHTML === "Add Server"){
      x.innerHTML = "Server was created"
      y.innerHTML = "Delete Server"
      y.classList.add('danger')
    }
}}