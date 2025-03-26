import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCarAmountComponent } from './make-car-amount.component';

describe('MakeCarAmountComponent', () => {
  let component: MakeCarAmountComponent;
  let fixture: ComponentFixture<MakeCarAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeCarAmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeCarAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
