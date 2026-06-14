import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposBR } from './equipos-br';

describe('EquiposBR', () => {
  let component: EquiposBR;
  let fixture: ComponentFixture<EquiposBR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquiposBR],
    }).compileComponents();

    fixture = TestBed.createComponent(EquiposBR);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
