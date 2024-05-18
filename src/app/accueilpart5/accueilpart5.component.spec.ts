import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart5Component } from './accueilpart5.component';

describe('Accueilpart5Component', () => {
  let component: Accueilpart5Component;
  let fixture: ComponentFixture<Accueilpart5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
