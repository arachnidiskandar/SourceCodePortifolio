import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiQRCodeComponent } from './wifi-qrcode.component';

describe('WifiQRCodeComponent', () => {
  let component: WifiQRCodeComponent;
  let fixture: ComponentFixture<WifiQRCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiQRCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiQRCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
