import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Substatic3Component } from './substatic3.component';

describe('Substatic3Component', () => {
  let component: Substatic3Component;
  let fixture: ComponentFixture<Substatic3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Substatic3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Substatic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
