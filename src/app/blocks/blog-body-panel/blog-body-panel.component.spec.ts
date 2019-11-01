import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBodyPanelComponent } from './blog-body-panel.component';

describe('BlogBodyPanelComponent', () => {
  let component: BlogBodyPanelComponent;
  let fixture: ComponentFixture<BlogBodyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogBodyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
