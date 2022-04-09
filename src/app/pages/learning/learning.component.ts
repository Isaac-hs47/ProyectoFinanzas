import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css', '../../shared/styles/styles.css']
})
export class LearningComponent implements OnInit {

  time!: Date;
  interval: any;
  constructor() { }

  ngOnInit(): void {
  }

  OnVideoPlay()
  {
    this.interval = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  OnVideoStop(){
    clearInterval(this.interval);
  }

  OnVideoEnd()
  {
    clearInterval(this.interval);
  }
}
