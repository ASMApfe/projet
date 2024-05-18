import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart7Component } from './accueilpart7.component';

describe('Accueilpart7Component', () => {
  let component: Accueilpart7Component;
  let fixture: ComponentFixture<Accueilpart7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
