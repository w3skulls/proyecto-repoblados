import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorprevioComponent } from './buscadorprevio.component';

describe('BuscadorprevioComponent', () => {
  let component: BuscadorprevioComponent;
  let fixture: ComponentFixture<BuscadorprevioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorprevioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorprevioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
