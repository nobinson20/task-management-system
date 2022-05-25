import { Component, OnInit, Input as ip, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @ip() color!: string;
  @ip() text!: string;
  @Output() btnClick;
  
  // don't have to set and initilize all members
  constructor() {
    this.btnClick = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
