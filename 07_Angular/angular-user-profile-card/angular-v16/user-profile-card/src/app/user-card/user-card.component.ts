import { Component, EventEmitter, Input, OnInit, Output, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';

export interface User{
  name:string;
  age:number;
  avatarUrl:string;
  isActive:boolean;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() user!:User;

  @Output() statusChanged=new EventEmitter<boolean>();

  userName='';
  isActive=false;

  @ViewChild('nameInput') nameInput!:ElementRef<HTMLInputElement>;
  @ViewChildren('matBtn',{read:ElementRef})
  buttons!:QueryList<ElementRef>;

  ngOnInit(){
    console.log("ngOnInit");
    this.userName=this.user.name;
    this.isActive=this.user.isActive;
  }

  toggleStatus(){
    this.isActive=!this.isActive;
    this.statusChanged.emit(this.isActive);
  }

  ngOnChanges() {
    console.log("ngonChnages");
    if(this.user){
      this.userName=this.user.name;
      this.isActive=this.user.isActive;
    }
  }

  ngAfterViewInit() {
    console.log('ngafterviewinit');
  }

}
