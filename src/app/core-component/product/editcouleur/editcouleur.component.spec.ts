import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcouleurComponent } from './editcouleur.component';

describe('EditcouleurComponent', () => {
  let component: EditcouleurComponent;
  let fixture: ComponentFixture<EditcouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcouleurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
