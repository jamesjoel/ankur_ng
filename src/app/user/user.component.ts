import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  teacher = 'red';
  color : string;


  dataName = [
  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const name = this.http.get('http://localhost:3000');
    console.log('name', name.subscribe((result) => {
      console.log('result', result);
    }));
  }

  clickButton(color: string) {
    this.color =color;
    console.log('color', color);

  }


}
