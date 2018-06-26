import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  title = 'app';
  elementType = 'url';
  value = 'Techiediaries';

  constructor() { }

  ngOnInit() {
  }

}
