import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {AngularFire} from 'angularfire2';

//import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //インスタンス
  email: string;
  password: string;
  loading: Loading;

  //コンストラクタ
  constructor(private navCtrl: NavController, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, public navParams: NavParams,
    public angularFire: AngularFire, public viewCtrl: ViewController) { }

  //アカウント作成
  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  //ログイン処理
  login() {
    //this.showLoading()
    this.angularFire.auth.login({
      email: this.email,
      password: this.password
    }).then(res => {
      console.log(res)     
      this.navCtrl.push(TabsPage);
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'ログインエラー',
        subTitle: String(err),
        buttons: ['OK']
        });
   
      alert.present();
      console.log(err);
    });
  }

  //ローディング表示
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'now loading',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  /*
  //エラー表示
  showError(text) {
    //this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
  */
}
