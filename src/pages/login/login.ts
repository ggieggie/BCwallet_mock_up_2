import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';

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
  talks: FirebaseListObservable<any>;
  content: string;
  private authState: FirebaseAuthState;

  //コンストラクタ
  constructor(private navCtrl: NavController, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController, public navParams: NavParams,
    public angularFire: AngularFire, public viewCtrl: ViewController) {

      //認証
      angularFire.auth.subscribe((state : FirebaseAuthState) => {
        this.authState = state;
        console.log("check state");
        //console.log("state: "JSON.stringify(state));
        
        if(this.authState != null) {
          
          // 認証情報がnullでない場合（認証できている場合） データを取得
          console.log('already logined');          
          this.navCtrl.push(TabsPage);
        } else {
          // 認証情報がnullの場合（認証できていない場合） 何もしない
          console.log('lets login');
        }
      });
  }

  //アカウント作成
  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  //ログイン処理
  login() {
    console.log('login');
    this.showLoading()
    this.angularFire.auth.login({
      email: this.email,
      password: this.password
    }).then(res => {
      console.log('res'+res)     
      this.navCtrl.push(TabsPage);
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'ログインエラー',
        subTitle: String(err),
        buttons: ['OK']
        });
   
      alert.present();
      this.loading.dismiss();
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
