import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaFormComponent } from './melhor-rota.component';

describe('MelhorRotaComponent', () => {
  let component: RotaFormComponent;
  let fixture: ComponentFixture<RotaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
