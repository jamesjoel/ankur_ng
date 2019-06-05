import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from './models';
import { UserServiceService } from './service/user-service.service';
import { UserObservableService } from './service/user-observable.service';
interface StuData {
  name: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editData:string;
  title = 'james';
  message: StuData[];
  user: UserInfo[] = [
    {
      userName: 'ankur',
      userAge: 25
    },
    {
      userName: 'james',
      userAge: 29,
      city: [
        'sasaram', 'ujjain'
      ]
    }
  ];
  i:number;
  sName: string;

  constructor(private router: Router,
    private userService: UserServiceService,
    private observseUserService: UserObservableService) {
  }

  ngOnInit() {
    this.getObservableData();
  }

  navigateToUser() {
    this.router.navigate(['user']);
  }
  receiveTitle(name: string) {
    console.log('name', name);
  }
  receiveTitleName(name: string) {
    console.log('name', name);
  }
  sendData() {
    const name = this.userService.getUserData();
    console.log('name ', name);
    this.sName = 'ankur keshri';
  }
  getObservableData() {
    // console.log(this.observseUserService.getDataOfUser().subscribe((name: string) => {
    //   console.log('name', name);
    // }));
    this.observseUserService.messageObserve.subscribe((message: StuData[]) => {
      this.message = message;
    });
  }
  userEdit(i:number){
    this.i=i;
    this.editData=this.message[i].name;
  }
  saveUser(){
    let singleObj = this.message[this.i];
    singleObj.name=this.editData;
    this.message[this.i]=singleObj;
    this.observseUserService.changeMessage(this.message);
  }
}
