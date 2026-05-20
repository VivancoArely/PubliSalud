import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elegir } from './elegir';

describe('Elegir', () => {
  let component: Elegir;
  let fixture: ComponentFixture<Elegir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Elegir],
    }).compileComponents();

    fixture = TestBed.createComponent(Elegir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
