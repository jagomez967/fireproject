import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportPorroComponent } from './view-report-porro.component';

describe('ViewReportPorroComponent', () => {
  let component: ViewReportPorroComponent;
  let fixture: ComponentFixture<ViewReportPorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReportPorroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportPorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
