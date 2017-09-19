import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //インスタンス
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  //コンストラクタ
  constructor(private navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  //アカウント作成
  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  //ログイン処理
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.navCtrl.setRoot(TabsPage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
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

  //エラー表示
  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
