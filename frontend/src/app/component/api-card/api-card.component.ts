import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  UserService
} from '../../service'
@Component({
  selector: 'app-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.scss']
})
export class ApiCardComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() imgUrl: string;
  @Input() content: string;
  @Input() apiText: string;
  @Input() responseObj: any;
  expand = false;


  @Output() apiClick: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.responseObj);
  }

  onButtonClick() {
    /*this.expand = true;*/
    /*this.apiClick.next(this.apiText);*/
    console.log('"printing...');
    this.printReport();
  }

  printReport() {

    window.open('http://localhost:8080/api/report', '_black');

    //this.userService.getReport()
    // .subscribe(res => {   }, err => {});
  }

  responsePanelClass() {
    const rClass = ['response'];
    if (this.expand) {
      rClass.push('expand');
    }
    if (this.responseObj.status) {
      this.responseObj.status === 200 ?
        rClass.push('response-success') :
        rClass.push('response-error');
    }
    return rClass.join(' ');
  }

}
