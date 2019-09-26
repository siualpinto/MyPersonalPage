import { Component, OnInit } from '@angular/core';
import { faCameraRetro, faIdBadge, faCubes, faFilePdf, faBlog, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  blogLink = 'https://medium.com/@lsmoreira77/latest';
  faCameraRetro = faCameraRetro;
  faIdBadge = faIdBadge;
  faCubes = faCubes;
  faFilePdf = faFilePdf;
  faBlog = faBlog;
  faEnvelopeSquare = faEnvelopeSquare;
  animationStyle = false;

  constructor() { }

  ngOnInit() {
  }

  navigateToBlog() {
    window.open(this.blogLink);
  }
}
