import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombaticaComponent } from './bombatica.component';

describe('BombaticaComponent', () => {
  let component: BombaticaComponent;
  let fixture: ComponentFixture<BombaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
