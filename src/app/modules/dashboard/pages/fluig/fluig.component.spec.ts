/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FluigComponent } from './fluig.component';

describe('FluigComponent', () => {
  let component: FluigComponent;
  let fixture: ComponentFixture<FluigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
