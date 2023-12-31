import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmodelComponent } from './detailmodel.component';

describe('DetailmodelComponent', () => {
  let component: DetailmodelComponent;
  let fixture: ComponentFixture<DetailmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
