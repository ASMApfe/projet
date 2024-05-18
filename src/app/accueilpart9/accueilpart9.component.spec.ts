import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart9Component } from './accueilpart9.component';

describe('Accueilpart9Component', () => {
  let component: Accueilpart9Component;
  let fixture: ComponentFixture<Accueilpart9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
