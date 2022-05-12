import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLossCommunicationComponent } from './add-loss-communication.component';

describe('AddLossCommunicationComponent', () => {
  let component: AddLossCommunicationComponent;
  let fixture: ComponentFixture<AddLossCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLossCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLossCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
