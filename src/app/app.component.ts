import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from './models';

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

  constructor(private router: Router) {
  }

  navigateToUser() {
    this.router.navigate(['user']);
  }
  receiveTitle(name: string) {
    console.log('name', name);
  }
}
