import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllLossCommunicationComponent } from './list-all-loss-communication.component';

describe('ListAllLossCommunicationComponent', () => {
  let component: ListAllLossCommunicationComponent;
  let fixture: ComponentFixture<ListAllLossCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllLossCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllLossCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
