import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegarsCardsComponent } from './begars-cards.component';

describe('BegarsCardsComponent', () => {
  let component: BegarsCardsComponent;
  let fixture: ComponentFixture<BegarsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegarsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegarsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
