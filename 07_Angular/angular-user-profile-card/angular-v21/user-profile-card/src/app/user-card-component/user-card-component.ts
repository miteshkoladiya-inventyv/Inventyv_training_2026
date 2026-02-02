import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ViewChild, ViewChildren, ElementRef, QueryList, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';

export interface User{
  name:string;
  age:number;
  avatarUrl:string;
  isActive:boolean;
}

@Component({
  selector: 'app-user-card-component',
  imports: [FormsModule, CommonModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './user-card-component.html',
  styleUrl: './user-card-component.css',
})


export class UserCardComponent implements  AfterViewInit, OnInit, OnChanges {
  // name=signal("mitesh");
  // age=signal(21);

  // avatarUrl="https://gravatar.com/avatar/19ebcae0564dcb96612230b1856b8ed2?s=200&d=robohash&r=x";

  // isActive=signal(true);

  // toggleStatus() {
  //   this.isActive.set(!this.isActive());
  // }

  @Input() user!:User;
  @Output() statusChanged = new EventEmitter<boolean>();

  userName = '';
  isActive = false;

  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  

  @ViewChildren('matBtn', { read: ElementRef })
  buttons!: QueryList<ElementRef>;


  ngOnInit() {
    console.log('ngonInit');
    this.userName = this.user.name;
    this.isActive = this.user.isActive;
  }

  ngOnChanges(changes: SimpleChanges) {
    //only change when @input reference changes,, not local var changes
    console.log('ngOnChanges');
    if (changes['user']?.currentValue) {
      this.userName = this.user.name;
      this.isActive = this.user.isActive;
    }
  }

  toggleStatus() {
  this.isActive = !this.isActive;
  this.statusChanged.emit(this.isActive);
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}

