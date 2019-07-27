import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomPage } from './create-room.page';

describe('CreateRoomPage', () => {
  let component: CreateRoomPage;
  let fixture: ComponentFixture<CreateRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
