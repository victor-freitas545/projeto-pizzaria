import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pizzaria } from './pizzaria';

describe('Pizzaria', () => {
  let component: Pizzaria;
  let fixture: ComponentFixture<Pizzaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pizzaria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pizzaria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
