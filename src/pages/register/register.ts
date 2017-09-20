import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { TabsPage } from '../tabs/tabs';

//import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
　//インスタンス
  email: string;
  password: string;
  displayName: string;

  //コンストラクタ
  constructor(private navCtrl: NavController, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, public navParams: NavParams,
    public angularFire: AngularFire, public viewCtrl: ViewController) { }

  //登録処理
  createUser() {
    this.angularFire.auth.createUser({
      email: this.email,
      password: this.password
    }).then(_ => {
      let alert = this.alertCtrl.create({
        title: '完了',
        subTitle: 'ユーザが作成されました。',
        buttons: ['OK']
      });
      this.navCtrl.push(TabsPage);      
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'エラー',
        subTitle: String(err),
        buttons: ['OK']
      });
        alert.present();          
    });
  }
}
