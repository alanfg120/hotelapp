import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewingresoComponent } from './newingreso.component';

describe('NewingresoComponent', () => {
  let component: NewingresoComponent;
  let fixture: ComponentFixture<NewingresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewingresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
