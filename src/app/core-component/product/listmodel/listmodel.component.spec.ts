import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmodelComponent } from './listmodel.component';

describe('ListmodelComponent', () => {
  let component: ListmodelComponent;
  let fixture: ComponentFixture<ListmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
