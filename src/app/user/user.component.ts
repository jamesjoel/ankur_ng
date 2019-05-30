import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  teacher = 'red';
  color: string;
  size = true;
  index: number;
  dataName = [
    {name: 'ankur'},
    {name: 'ankur1'},
    {name: 'ankur2'},
    {name: 'ankur3'},
    {name: 'ankur4'}
  ];

  @Input() title: string;
  @Output() titleName = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // const name = this.http.get('http://localhost:3000');
    // console.log('name', name.subscribe((result) => {
    //   console.log('result', result);
    // }));
  }

  clickButton(color: string) {
    this.color = color;
    console.log('color', color);

  }

  callFunction(name: string, index: number) {
    this.teacher = name;
    this.index = index;
  }

  updateName() {
    this.dataName[this.index].name = this.teacher;
  }

  sendDataToParent() {
    this.titleName.emit(this.teacher);
  }


}
