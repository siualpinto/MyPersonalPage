import { Component, OnInit } from '@angular/core';
import { faLinkedin, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile-body-panel',
  templateUrl: './profile-body-panel.component.html',
  styleUrls: ['./profile-body-panel.component.scss']
})
export class ProfileBodyPanelComponent implements OnInit {
  stackOverflowLink = 'https://stackoverflow.com/users/9840062/luis-pinto?tab=profile';
  linkedin = 'https://www.linkedin.com/in/luis-a-m-p/';
  github = 'https://github.com/siualpinto';
  feup = 'https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_VIEW?pv_curso_id=742';
  gasPorto = 'https://www.gasporto.pt/';
  faLinkedin = faLinkedin;
  faStackOverflow = faStackOverflow;
  faGithub = faGithub;
  constructor() { }

  ngOnInit() {
  }

}
