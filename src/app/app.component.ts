import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'james';

  constructor(private router: Router) {
  }

  navigateToUser() {
    this.router.navigate(['user']);
  }
  receiveTitle(name: string) {
    console.log('name', name);
  }
}
