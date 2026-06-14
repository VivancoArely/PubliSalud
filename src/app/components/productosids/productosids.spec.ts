import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productosids } from './productosids';

describe('Productosids', () => {
  let component: Productosids;
  let fixture: ComponentFixture<Productosids>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Productosids],
    }).compileComponents();

    fixture = TestBed.createComponent(Productosids);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
