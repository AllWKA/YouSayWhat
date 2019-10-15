import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRoomPage } from './join-room.page';

describe('JoinRoomPage', () => {
  let component: JoinRoomPage;
  let fixture: ComponentFixture<JoinRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
