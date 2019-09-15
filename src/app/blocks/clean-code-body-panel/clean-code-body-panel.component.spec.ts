import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanCodeBodyPanelComponent } from './clean-code-body-panel.component';

describe('CleanCodeBodyPanelComponent', () => {
  let component: CleanCodeBodyPanelComponent;
  let fixture: ComponentFixture<CleanCodeBodyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanCodeBodyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanCodeBodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
