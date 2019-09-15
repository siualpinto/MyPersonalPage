import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBodyPanelComponent } from './profile-body-panel.component';

describe('ProfileBodyPanelComponent', () => {
  let component: ProfileBodyPanelComponent;
  let fixture: ComponentFixture<ProfileBodyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBodyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
