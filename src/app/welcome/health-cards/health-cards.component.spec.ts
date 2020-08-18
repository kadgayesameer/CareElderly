import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCardsComponent } from './health-cards.component';

describe('HealthCardsComponent', () => {
  let component: HealthCardsComponent;
  let fixture: ComponentFixture<HealthCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
