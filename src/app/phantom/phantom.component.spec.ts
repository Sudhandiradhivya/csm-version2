/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhantomComponent } from './phantom.component';

describe('PhantomComponent', () => {
  let component: PhantomComponent;
  let fixture: ComponentFixture<PhantomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhantomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhantomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
