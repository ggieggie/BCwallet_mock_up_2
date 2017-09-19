import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';
import { GithubUsersService } from '../../providers/github-users-service/github-users-service';
import { User } from '../../providers/github-users-service/user';

import { TabsPage } from '../tabs/tabs';
import { ReceivePage } from '../receive/receive';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-memberlist',
  templateUrl: 'memberlist.html'
})
export class MemberlistPage {
  users: User[];

  qrData = "1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r";
  createdCode = null;
  scannedCode = null;
  testRadioOpen: boolean;
  testRadioResult;
  //送金テスト用のアドレス。両方ノード[０]のアドレス
  testMyadress = "1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r"
  testYouradress = "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv"
  send_amount = 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private githubUsersSevice: GithubUsersService, public http: Http) {
    githubUsersSevice.getUsers()
      .subscribe(users => {
        this.users = users;
      },
      err => console.log(err),
      () => {});
  }

　public returntabs() {
      this.navCtrl.setRoot(ReceivePage);
  }

  　public send() {
     this.showPrompt();
  }

  //送金プロンプトの表示
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'このURLに送金',
      message: "送金するコインとその金額を入力してください",
      inputs: [
        {
          name: 'input_amount',
          placeholder: '金額'
        },
      ],
      buttons: [
        {
          text: 'キャンセル',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '送金',
          handler: data => {
            this.send_amount = data.input_amount;
            this.send_marucoin();
            console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
  }

  //マルコインの送信
  send_marucoin(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
        var options = new RequestOptions({ "headers": headers });
        var body = {
         "method"  : "sendfromaddress",

         //パラメータを修正しました
         //params  : [this.testMyadress, this.testYouradress, this.send_amount],
         "params"  : [this.testMyadress, this.testYouradress, {"marucoin":Number(this.send_amount)}],
         "id"    : 0,
         "chain_name": "chain1"
        }
        this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
          .map(response => response.json())
          .subscribe(result => {
            console.log("data: "+JSON.stringify(result));
            //console.log("data: "+JSON.stringify(result.result[0].qty));
            //console.log("data: "+JSON.stringify(result.result[0].name));
            //this.maru_balance = JSON.stringify(result.result[0].qty);
           }, error => {
            console.log(error);// Error getting the data
          });
  }


}
