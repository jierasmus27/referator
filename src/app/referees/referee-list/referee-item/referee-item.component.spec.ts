import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeItemComponent } from './referee-item.component';

describe('RefereeItemComponent', () => {
  let component: RefereeItemComponent;
  let fixture: ComponentFixture<RefereeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
