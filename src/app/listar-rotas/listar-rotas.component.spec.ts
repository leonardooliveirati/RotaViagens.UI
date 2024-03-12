import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRotasComponent } from './listar-rotas.component';

describe('ListarRotasComponent', () => {
  let component: ListarRotasComponent;
  let fixture: ComponentFixture<ListarRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarRotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
