import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegarsHelpComponent } from './begars-help.component';

describe('BegarsHelpComponent', () => {
  let component: BegarsHelpComponent;
  let fixture: ComponentFixture<BegarsHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegarsHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegarsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
