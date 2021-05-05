import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPorroComponent } from './add-porro.component';

describe('AddPorroComponent', () => {
  let component: AddPorroComponent;
  let fixture: ComponentFixture<AddPorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPorroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
