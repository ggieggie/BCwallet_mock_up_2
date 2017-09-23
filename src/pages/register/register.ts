import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AngularFire, FirebaseAuthState, AngularFireAuth } from 'angularfire2';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Firebase } from '@ionic-native/firebase';

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
  authState: FirebaseAuthState;
  coinAddress = null;

  //コンストラクタ
  constructor(private navCtrl: NavController, private alertCtrl: AlertController,private firebase: Firebase,
    private loadingCtrl: LoadingController, public navParams: NavParams,public afauth: AngularFireAuth,
    public angularFire: AngularFire, public viewCtrl: ViewController, public http: Http) { }

  //登録処理
  createUser() {
    console.log('create user');    
    this.angularFire.auth.createUser({
      email: this.email,
      password: this.password
    }).then(_ => {
      console.log('created user');
      let alert = this.alertCtrl.create({
        title: '完了',
        subTitle: 'ユーザが作成されました。',
        buttons: ['OK']
      });
      this.getNewAddress();
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

  //コインアドレス生成関数
  getNewAddress(){
    console.log("get new address")
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
    var options = new RequestOptions({ "headers": headers });
    var body = {
      method  : "getnewaddress",
      params  : [],
      id    : 0,
      chain_name: "chain1"
    }
    this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
      .map(response => response.json())
      .subscribe(result => {
        console.log("got new address: "+result.result);
        this.coinAddress = result.result;
        this.updateProfile();
        this.grant();
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  grant(){
    console.log("grant")
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
    var options = new RequestOptions({ "headers": headers });
    console.log(this.coinAddress);
    var body = {
      method  : "grant",
      params  : [this.coinAddress,"connect,send,receive,create"],
      id    : 0,
      chain_name: "chain1"
    }
    this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
      .map(response => response.json())
      .subscribe(result => {
        console.log("granted: "+result);
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  //プロフィール更新関数
  updateProfile() {
    console.log('update profile');
    console.log('displayName:'+this.displayName);
    console.log('coinAddress:'+this.coinAddress);

    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: this.displayName,
      photoURL: this.coinAddress
    }).then(_ => {
      console.log('updated profile1');
      this.navCtrl.push(TabsPage);      
    }).catch(err => {
      console.log(String(err));
    });
  }
}
