import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})

export class AccountPage {
  //インスタンス
  username = '';
  email = '';

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
    this.getProfile();
  }

  //サイドバーを閉じる
  public returntabs() {
    this.navCtrl.setRoot(TabsPage);
  }

  //情報取得
  public getProfile() {
    var user = firebase.auth().currentUser;
    this.username = user.displayName;
    this.email = user.email; 
  }



}
