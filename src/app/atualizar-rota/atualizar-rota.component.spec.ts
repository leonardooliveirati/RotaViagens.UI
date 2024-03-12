import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarRotaComponent } from './atualizar-rota.component';

describe('AtualizarRotaComponent', () => {
  let component: AtualizarRotaComponent;
  let fixture: ComponentFixture<AtualizarRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarRotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
