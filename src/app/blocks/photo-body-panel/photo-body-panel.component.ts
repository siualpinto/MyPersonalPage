import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-body-panel',
  templateUrl: './photo-body-panel.component.html',
  styleUrls: ['./photo-body-panel.component.scss']
})
export class PhotoBodyPanelComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
