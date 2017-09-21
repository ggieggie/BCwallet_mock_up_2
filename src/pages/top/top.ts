import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

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
 

  //コンストラクタ
  constructor(public navCtrl: NavController, public http: Http, 
    public angularFire: AngularFire, public modalCtrl: ModalController) {

      if(this.bit_balance == null){

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
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
    var options = new RequestOptions({ "headers": headers });
    var body = {
      method  : "getaddressbalances",
      params  : ["1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r"],
      id    : 0,
      chain_name: "chain1"
    }
    this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
      .map(response => response.json())
      .subscribe(result => {
        console.log("data: "+JSON.stringify(result));
        console.log("data: "+JSON.stringify(result.result[0].qty));
        console.log("data: "+JSON.stringify(result.result[0].name));
        this.maru_balance = JSON.stringify(result.result[0].qty);
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
}