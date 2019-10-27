import { Component, OnInit } from '@angular/core';
import { faInstagram, fa500px } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-photo-body-panel',
  templateUrl: './photo-body-panel.component.html',
  styleUrls: ['./photo-body-panel.component.scss']
})
export class PhotoBodyPanelComponent implements OnInit {
  faInstagram = faInstagram;
  fa500px = fa500px;
  instagramLink = 'https://www.instagram.com/alberto_p.h.o.t.o/';
  pixLink = 'https://500px.com/lsmoreira77';
  constructor() { }

  ngOnInit() {
  }

}
