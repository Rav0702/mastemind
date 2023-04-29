import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimaxGameComponent } from './minimax-game.component';

describe('MinimaxGameComponent', () => {
  let component: MinimaxGameComponent;
  let fixture: ComponentFixture<MinimaxGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimaxGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimaxGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
