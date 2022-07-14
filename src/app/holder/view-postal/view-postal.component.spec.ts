import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ViewPostalComponent } from './view-postal.component';

describe('ViewPostalComponent', () => {
  let component: ViewPostalComponent;
  let fixture: ComponentFixture<ViewPostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
