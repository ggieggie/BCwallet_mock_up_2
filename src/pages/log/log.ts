import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LogService } from '../../providers/log-service/log-service';
import { Log } from '../../providers/log-service/mylog';

import { TabsPage } from '../tabs/tabs';
import { ReceivePage } from '../receive/receive';


@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})
export class LogPage {
  logs: Log[];

  constructor(public navCtrl: NavController, private logService: LogService) {
    logService.getLog()
      .subscribe(logs => {
        this.logs = logs;
      },
      err => console.log(err),
      () => {});
  }

　public returntabs() {
      this.navCtrl.setRoot(ReceivePage);
  }

}
