import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart1Component } from './accueilpart1.component';

describe('Accueilpart1Component', () => {
  let component: Accueilpart1Component;
  let fixture: ComponentFixture<Accueilpart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
