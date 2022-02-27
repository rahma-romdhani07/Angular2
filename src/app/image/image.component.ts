import { Component, OnInit } from '@angular/core';
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  fancybox :any;
  constructor() { }

  ngOnInit() {
    Fancybox.bind('[data-fancybox="gallery"]', {
      infinite: false
    });
  }

}
