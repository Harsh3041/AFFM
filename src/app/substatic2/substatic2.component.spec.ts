import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Substatic2Component } from './substatic2.component';

describe('Substatic2Component', () => {
  let component: Substatic2Component;
  let fixture: ComponentFixture<Substatic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Substatic2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Substatic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
