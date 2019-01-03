import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberEntryComponent } from './new-member-entry.component';

describe('NewMemberEntryComponent', () => {
  let component: NewMemberEntryComponent;
  let fixture: ComponentFixture<NewMemberEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMemberEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemberEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
