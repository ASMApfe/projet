import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart3Component } from './accueilpart3.component';

describe('Accueilpart3Component', () => {
  let component: Accueilpart3Component;
  let fixture: ComponentFixture<Accueilpart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
