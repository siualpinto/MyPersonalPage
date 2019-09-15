import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBodyPanelComponent } from './cv-body-panel.component';

describe('CvBodyPanelComponent', () => {
  let component: CvBodyPanelComponent;
  let fixture: ComponentFixture<CvBodyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvBodyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvBodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
