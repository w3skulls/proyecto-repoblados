import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorResultadosComponent } from './contenedor-resultados.component';

describe('ContenedorResultadosComponent', () => {
  let component: ContenedorResultadosComponent;
  let fixture: ComponentFixture<ContenedorResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
