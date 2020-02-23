import { Component, OnInit } from '@angular/core';
import { QrCodeHelper } from 'ngx-kjua';

@Component({
  selector: 'app-wifi-qrcode',
  templateUrl: './wifi-qrcode.component.html',
  styleUrls: ['./wifi-qrcode.component.scss']
})
export class WifiQRCodeComponent implements OnInit {
  ssid: string = 'VIVO-A574';
  pass: string = 'C66249A574';
  wifi = '';
  qrCode;

  constructor() { }

  ngOnInit() {
    this.wifi = QrCodeHelper.makeWifi(this.ssid, this.pass);
    console.log(this.qrCode);
  }

}
