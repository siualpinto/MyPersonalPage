import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-body-panel',
  templateUrl: './blog-body-panel.component.html',
  styleUrls: ['./blog-body-panel.component.scss']
})
export class BlogBodyPanelComponent implements OnInit {
  blogLink = 'https://medium.com/@lsmoreira77/latest';
  constructor() { }

  ngOnInit() {
  }

}
