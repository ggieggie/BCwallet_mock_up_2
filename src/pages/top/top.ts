import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { Firebase } from '@ionic-native/firebase';


//import { AuthService } from '../../providers/auth-service/auth-service';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-top',
  templateUrl: 'top.html'
})
export class TopPage {

  //インスタンス
  username = '';
  email = '';
  bit_balance = null;
  maru_balance = null;
  coinAddress = '';

  //コンストラクタ
  constructor(public navCtrl: NavController, public http: Http, private firebase: Firebase,
    public angularFire: AngularFire, public modalCtrl: ModalController) {

      if(this.bit_balance == null){

        //情報取得
        this.getProfile();

        //bitcoin残高確認
        this.getBitbalance();

        //marucoin残高確認
        this.getMarubalance();
        console.log("constructor");
      }
  }

  //topのreloadボタン用関数
  reload(){
    this.getBitbalance();
    this.getMarubalance();
  }

  //ビットコインの値を確認する関数
  getBitbalance() {
    this.bit_balance = 100;
  }

  //マルコインの値を確認する関数
  getMarubalance() {
    var user = firebase.auth().currentUser;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
    var options = new RequestOptions({ "headers": headers });
    var body = {
      method  : "getaddressbalances",
      params  : [this.coinAddress],
      id    : 0,
      chain_name: "chain1"
    }
    this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
      .map(response => response.json())
      .subscribe(result => {
        console.log("data: "+JSON.stringify(result));
        if(JSON.stringify(result.result) == "null" || JSON.stringify(result.result) == "[]"){
          console.log("B");
          this.maru_balance = 0;
        }else{
        console.log("A");
        console.log("data: "+JSON.stringify(result.result[0].qty));
        console.log("data: "+JSON.stringify(result.result[0].name));
        this.maru_balance = JSON.stringify(result.result[0].qty);
        }
       }, error => {
        console.log(error);// Error getting the data

      });
  }

  //ログアウト
  public logout() {
    this.angularFire.auth.logout();
    let loginModal = this.modalCtrl.create(LoginPage,{},{"enableBackdropDismiss":false});
    loginModal.present();
  }

  //情報取得
  public getProfile() {
    var user = firebase.auth().currentUser;
    this.username = user.displayName;
    this.coinAddress = user.photoURL; 
  }
}