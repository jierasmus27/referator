import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeDetailComponent } from './referee-detail.component';

describe('RefereeDetailComponent', () => {
  let component: RefereeDetailComponent;
  let fixture: ComponentFixture<RefereeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
