import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesansdecoupageComponent } from './facturesansdecoupage.component';

describe('FacturesansdecoupageComponent', () => {
  let component: FacturesansdecoupageComponent;
  let fixture: ComponentFixture<FacturesansdecoupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesansdecoupageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesansdecoupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
