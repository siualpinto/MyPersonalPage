import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects-body-panel',
  templateUrl: './projects-body-panel.component.html',
  styleUrls: ['./projects-body-panel.component.scss']
})
export class ProjectsBodyPanelComponent implements OnInit {
  project1 = 'https://ideiassustentaveis.fe.up.pt/';
  githubProject1 = 'https://github.com/pcostaeu/LDSO_MoreSustainableIdeas';
  githubProject2 = 'https://github.com/JoaoMonteiro100/LGP-5A';
  faGithub = faGithub;
  constructor() { }

  ngOnInit() {
  }

}
