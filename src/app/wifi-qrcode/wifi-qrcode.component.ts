import { Component, ViewChild, ElementRef } from '@angular/core';
import { QrCodeHelper } from 'ngx-kjua';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-wifi-qrcode',
  templateUrl: './wifi-qrcode.component.html',
  styleUrls: ['./wifi-qrcode.component.scss']
})
export class WifiQRCodeComponent {
  ssid = '';
  pass = '';
  wifi = '';
  qrCode;

  @ViewChild('htmlQR', {static: null}) htmlQR: ElementRef;
  pdf = new jsPDF('p', 'mm', [297, 210]);
  constructor() {
  }

  onChange() {
    this.wifi = QrCodeHelper.makeWifi(this.ssid, this.pass);
  }
  gerarPDF() {
    this.pdf.addHTML(this.htmlQR.nativeElement, () => {
      this.pdf.save('wifi-share.pdf');
    });
  }


}
