import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart2Component } from './accueilpart2.component';

describe('Accueilpart2Component', () => {
  let component: Accueilpart2Component;
  let fixture: ComponentFixture<Accueilpart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
