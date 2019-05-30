import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-area',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.scss']
})
export class TopAreaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToAbout() {
    this.router.navigate(['about']);
  }

}
