import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcouleurComponent } from './addcouleur.component';

describe('AddcouleurComponent', () => {
  let component: AddcouleurComponent;
  let fixture: ComponentFixture<AddcouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcouleurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
