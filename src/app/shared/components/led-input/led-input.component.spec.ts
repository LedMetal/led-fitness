import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedInputComponent } from './led-input.component';

describe('LedInputComponent', () => {
  let component: LedInputComponent;
  let fixture: ComponentFixture<LedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
