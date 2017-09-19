import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController, NavController  } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { MemberlistPage } from '../memberlist/memberlist';

@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html'
})
export class ReceivePage {
  qrData = "1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r";
  createdCode = null;
  scannedCode = null;
  testRadioOpen: boolean;
  testRadioResult;
  //送金テスト用のアドレス。両方ノード[０]のアドレス
  testMyadress = "1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r"
  testYouradress = "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv"
  send_amount = 0;


　//コンストラクタ
  constructor(private barcodeScanner: BarcodeScanner, public alertCtrl: AlertController, public navCtrl: NavController, public http: Http) {
  }
  //constructor(public alertCtrl: AlertController) { }

  //QRコードの作成
  createCode() {
    this.createdCode = this.qrData;
  }

  //QRコードの読み取り
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
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


//送信相手リストの表示
showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('送金先を選択');


         alert.addInput({
           type: 'radio',
           label: '野村　武',
           value: "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv"
         });

         alert.addInput({
           type: 'radio',
           label: '内田　忠',
           value: "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv"
         });

         alert.addInput({
           type: 'radio',
           label: '栗林　修',
           value: "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv"
         });

         alert.addInput({
           type: 'radio',
           label: '島田　岳雄',
           value: "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv"
         });

         alert.addInput({
           type: 'radio',
           label: '戸本　裕太郎',
           value: "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv"
         });

         alert.addInput({
           type: 'radio',
           label: '清田　雄平',
           value: "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv"
         });

     alert.addButton('キャンセル');
     alert.addButton({
       text: 'OK',
       handler: data => {
         this.testRadioOpen = false;
         this.testRadioResult = data;
         this.showPrompt();
       }
     });
     alert.present();
    }

//QRコードから相手と繋がって中電コインを送る
  scanCode_main(){
   this.scanCode();
   this.showPrompt();
  }

//送信リストから相手を選んで中電コインを送る
  selectCode_main(){
   //this.showRadio();
   this.navCtrl.setRoot(MemberlistPage);
  }



}
