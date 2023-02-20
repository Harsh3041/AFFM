import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstaticComponent } from './substatic.component';

describe('SubstaticComponent', () => {
  let component: SubstaticComponent;
  let fixture: ComponentFixture<SubstaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
