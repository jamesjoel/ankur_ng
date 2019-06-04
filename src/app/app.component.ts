import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from './models';
import { UserServiceService } from './service/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'james';
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
  sName: string;

  constructor(private router: Router,
    private userService: UserServiceService) {
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
}
