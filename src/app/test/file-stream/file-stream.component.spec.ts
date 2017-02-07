/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FileStreamComponent } from './file-stream.component';

describe('FileStreamComponent', () => {
  let component: FileStreamComponent;
  let fixture: ComponentFixture<FileStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
