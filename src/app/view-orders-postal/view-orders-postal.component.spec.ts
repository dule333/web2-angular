import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersPostalComponent } from './view-orders-postal.component';

describe('ViewOrdersPostalComponent', () => {
  let component: ViewOrdersPostalComponent;
  let fixture: ComponentFixture<ViewOrdersPostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersPostalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrdersPostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
