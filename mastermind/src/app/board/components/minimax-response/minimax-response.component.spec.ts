import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimaxResponseComponent } from './minimax-response.component';

describe('MinimaxResponseComponent', () => {
  let component: MinimaxResponseComponent;
  let fixture: ComponentFixture<MinimaxResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimaxResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimaxResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
