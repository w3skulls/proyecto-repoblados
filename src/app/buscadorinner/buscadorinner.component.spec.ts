import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorinnerComponent } from './buscadorinner.component';

describe('BuscadorinnerComponent', () => {
  let component: BuscadorinnerComponent;
  let fixture: ComponentFixture<BuscadorinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
