import { Component, OnInit } from '@angular/core';
import { ImagesProfile } from 'src/app/interfaces/imagesProfile';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  images!: ImagesProfile[];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.GetJson<ImagesProfile>('profileImages').subscribe({
      next: (next) => {
        this.images = [...next];
      }
    });
  }

}
