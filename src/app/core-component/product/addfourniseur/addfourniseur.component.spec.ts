import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfourniseurComponent } from './addfourniseur.component';

describe('AddfourniseurComponent', () => {
  let component: AddfourniseurComponent;
  let fixture: ComponentFixture<AddfourniseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfourniseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfourniseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
