import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBodyPanelComponent } from './photo-body-panel.component';

describe('PhotoBodyPanelComponent', () => {
  let component: PhotoBodyPanelComponent;
  let fixture: ComponentFixture<PhotoBodyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoBodyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
