import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoInfoComponent } from './ngo-info.component';

describe('NgoInfoComponent', () => {
  let component: NgoInfoComponent;
  let fixture: ComponentFixture<NgoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
