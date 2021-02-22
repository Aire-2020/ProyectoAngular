import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresDetallesComponent } from './jugadores-detalles.component';

describe('JugadoresDetallesComponent', () => {
  let component: JugadoresDetallesComponent;
  let fixture: ComponentFixture<JugadoresDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadoresDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
