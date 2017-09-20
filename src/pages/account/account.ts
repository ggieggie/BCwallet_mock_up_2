import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

//import { AuthService } from '../../providers/auth-service/auth-service';

import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  //インスタンス
  username = 'a';
  email = 'a';

  constructor(public alertCtrl: AlertController, public navCtrl: NavController
    //, private auth: AuthService
  ) {

    //ユーザー情報取得
    //let info = this.auth.getUserInfo();
    //this.username = info['name'];
    //this.email = info['email'];
  }


    public returntabs() {
      this.navCtrl.setRoot(TabsPage);
  }



}
