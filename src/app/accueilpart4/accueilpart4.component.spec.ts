import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart4Component } from './accueilpart4.component';

describe('Accueilpart4Component', () => {
  let component: Accueilpart4Component;
  let fixture: ComponentFixture<Accueilpart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
