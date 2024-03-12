import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarRotaComponent } from './adicionar-rota.component';

describe('AdicionarRotaComponent', () => {
  let component: AdicionarRotaComponent;
  let fixture: ComponentFixture<AdicionarRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarRotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
