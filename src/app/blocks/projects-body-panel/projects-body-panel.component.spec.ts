import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBodyPanelComponent } from './projects-body-panel.component';

describe('ProjectsBodyPanelComponent', () => {
  let component: ProjectsBodyPanelComponent;
  let fixture: ComponentFixture<ProjectsBodyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsBodyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsBodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
