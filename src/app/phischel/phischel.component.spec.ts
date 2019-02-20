import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhischelComponent } from './phischel.component';

describe('PhischelComponent', () => {
  let component: PhischelComponent;
  let fixture: ComponentFixture<PhischelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhischelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhischelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
