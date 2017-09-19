import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopPage } from '../top/top';
import { ReceivePage } from '../receive/receive';
import { TransactionPage } from '../transaction/transaction';
import { LogPage } from '../log/log';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TopPage;
  tab2Root = ReceivePage;
  tab3Root = TransactionPage;
  tab4Root = LogPage;

  constructor(public navCtrl: NavController) {
  }
  goToTop(params){
    if (!params) params = {};
    this.navCtrl.push(TopPage);
  }goToReceive(params){
    if (!params) params = {};
    this.navCtrl.push(ReceivePage);
  }goToTransaction(params){
    if (!params) params = {};
    this.navCtrl.push(TransactionPage);
  }goToLog(params){
       if (!params) params = {};
       this.navCtrl.push(LogPage);
       }
}
