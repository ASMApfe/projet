import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart8Component } from './accueilpart8.component';

describe('Accueilpart8Component', () => {
  let component: Accueilpart8Component;
  let fixture: ComponentFixture<Accueilpart8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
