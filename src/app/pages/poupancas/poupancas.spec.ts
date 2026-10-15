import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Poupancas } from './poupancas';

describe('Poupancas', () => {
  let component: Poupancas;
  let fixture: ComponentFixture<Poupancas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poupancas],
    }).compileComponents();

    fixture = TestBed.createComponent(Poupancas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
