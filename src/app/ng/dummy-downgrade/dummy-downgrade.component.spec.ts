import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDowngradeComponent } from './dummy-downgrade.component';

describe('DummyDowngradeComponent', () => {
  let component: DummyDowngradeComponent;
  let fixture: ComponentFixture<DummyDowngradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyDowngradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyDowngradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
