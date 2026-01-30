import { AfterViewInit,OnChanges,OnInit,Component, ElementRef, ViewChild, ViewChildren, QueryList, SimpleChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

  export interface User {
  name: string;
  age: number;
  avatarUrl: string;
  isActive: boolean;
}


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})


export class UserCardComponent implements OnInit , OnChanges, AfterViewInit {
  @Input() user!: User;
  @Output() statusChanged = new EventEmitter<boolean>(); 


  userName = '';
  isActive = false;


  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChildren('matBtn',{read:ElementRef}) buttons!: QueryList<ElementRef>;
  

  ngOnInit() {
    console.log('ngOnInit');
    this.userName = this.user.name;
    this.isActive = this.user.isActive;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    if (changes['user']?.currentValue) {
      this.userName = this.user.name;
      this.isActive = this.user.isActive;
    }
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  toggleStatus() {
    this.isActive = !this.isActive;
    this.statusChanged.emit(this.isActive);
  }

}
