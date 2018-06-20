import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor(
    private msg: MatSnackBar
  ) { }

  info(message: string)
  {
    this.msg.open(message);
  }

  erro(message: string)
  {
    this.msg.open(message);
  }

}

