import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../models';
import { UserServiceService } from '../service/user-service.service';
import { UserObservableService } from '../service/user-observable.service';

interface StuData {
  name: string;
  age: number;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UserComponent implements OnInit {
  teacher = 'red';
  message: StuData[];
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
  @Input() headTitle: string;
  @Input() user: UserInfo[];
  @Output() titleName = new EventEmitter();
  constructor(private http: HttpClient,
    private userService: UserServiceService,
    private observseUserService: UserObservableService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    // const name = this.http.get('http://localhost:3000');
    // console.log('name', name.subscribe((result) => {
      //   console.log('result', result);
      // }));
    this.observseUserService.messageObserve.subscribe((message: StuData[]) => {
      this.message = message;
      console.log('user message', this.message);
      // this.cdRef.detectChanges();
    });
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

  changeMessage() {
    this.observseUserService.changeMessage(this.message);
  }

}
