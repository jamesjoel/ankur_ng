import { Component, OnInit } from '@angular/core';
import { LiveNewsService } from '../service/live-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private liveNewsService: LiveNewsService) { }

  ngOnInit() {
    const liveData = this.liveNewsService.getLiveNewsData().subscribe((data: any) => {
      console.log('data omponent', data);
    });
    console.log(this.liveNewsService.getData().subscribe((name: string) => {
      console.log('name',name);
    }));
  }

}
