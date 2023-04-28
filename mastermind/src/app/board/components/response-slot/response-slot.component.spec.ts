import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSlotComponent } from './response-slot.component';

describe('ResponseSlotComponent', () => {
  let component: ResponseSlotComponent;
  let fixture: ComponentFixture<ResponseSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
