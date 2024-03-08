import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialFamiliesListComponent } from './commercial-families-list.component';

describe('CommercialFamiliesListComponent', () => {
  let component: CommercialFamiliesListComponent;
  let fixture: ComponentFixture<CommercialFamiliesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialFamiliesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialFamiliesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
