import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Equiposlider } from './equiposlider';

describe('Equiposlider', () => {
  let component: Equiposlider;
  let fixture: ComponentFixture<Equiposlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Equiposlider],
    }).compileComponents();

    fixture = TestBed.createComponent(Equiposlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
