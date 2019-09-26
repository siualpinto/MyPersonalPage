import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-body-panel',
  templateUrl: './profile-body-panel.component.html',
  styleUrls: ['./profile-body-panel.component.scss']
})
export class ProfileBodyPanelComponent implements OnInit {
  stackOverflowLink = 'https://stackoverflow.com/users/9840062/luis-pinto?tab=profile';
  linkedin = 'https://www.linkedin.com/in/luis-a-m-p/';

  constructor() { }

  ngOnInit() {
  }

}
