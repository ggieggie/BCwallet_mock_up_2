import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
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
  constructor(public navCtrl: NavController, public http: Http, private auth: AuthService) {
    //ユーザー情報取得
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

    //bitcoin残高確認
    this.getBitbalance();

    //marucoin残高確認
    this.getMarubalance();
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
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

}
