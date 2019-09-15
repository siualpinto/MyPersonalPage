import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBodyPanelComponent } from './contact-body-panel.component';

describe('ContactBodyPanelComponent', () => {
  let component: ContactBodyPanelComponent;
  let fixture: ComponentFixture<ContactBodyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBodyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBodyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
