import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovimentoForm } from './movimento-form';

describe('MovimentoForm', () => {
  let component: MovimentoForm;
  let fixture: ComponentFixture<MovimentoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MovimentoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
