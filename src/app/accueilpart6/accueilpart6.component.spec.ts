import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilpart6Component } from './accueilpart6.component';

describe('Accueilpart6Component', () => {
  let component: Accueilpart6Component;
  let fixture: ComponentFixture<Accueilpart6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accueilpart6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Accueilpart6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
