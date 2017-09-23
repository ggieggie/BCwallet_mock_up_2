import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, ModalController, IonicPage, LoadingController, Loading } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
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
  loading: Loading;
  private authState: FirebaseAuthState;
  


  //コンストラクタ
  constructor(public navCtrl: NavController, public http: Http, private firebase: Firebase,
    public angularFire: AngularFire, public modalCtrl: ModalController, private loadingCtrl: LoadingController) {

      console.log("topPage constructor");      
      //認証
      angularFire.auth.subscribe((state : FirebaseAuthState) => {
        this.authState = state;
        console.log("check state");
        //console.log("state: "JSON.stringify(state));
        
        if(this.authState != null) {
          
          // 認証情報がnullでない場合（認証できている場合） 
          console.log('already logined');
          if(this.maru_balance == null){
            
            this.getProfile();
            this.getBitbalance();
            this.getMarubalance();
          }  

        } else {

          // 認証情報がnullの場合（認証できていない場合） ログインページへ
          console.log('to login');
          let loginModal = this.modalCtrl.create(LoginPage,{},{"enableBackdropDismiss":false});
          loginModal.present();
        }
      });
  }

  //topのreloadボタン用関数
  reload(){
    this.getBitbalance();
    this.reloadGetMarubalance();  
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
        //console.log("data: "+JSON.stringify(result));
        if(JSON.stringify(result.result) == "null" || JSON.stringify(result.result) == "[]"){
          console.log("no balance");
          this.maru_balance = 0;
        }else{
        console.log("name: "+JSON.stringify(result.result[0].name));          
        console.log("qty: "+JSON.stringify(result.result[0].qty));
        this.maru_balance = JSON.stringify(result.result[0].qty);
        }
       }, error => {
        console.log(error);// Error getting the data
      });
  }

  //reload&マルコインの値を確認する関数
  reloadGetMarubalance() {
    this.showLoading();
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
        //console.log("data: "+JSON.stringify(result));
        if(JSON.stringify(result.result) == "null" || JSON.stringify(result.result) == "[]"){
          console.log("no balance");
          this.maru_balance = 0;

        }else{
        console.log("name: "+JSON.stringify(result.result[0].name));          
        console.log("qty: "+JSON.stringify(result.result[0].qty));
        this.maru_balance = JSON.stringify(result.result[0].qty);
        }
        this.loading.dismiss();        
        }, error => {
        console.log(error);// Error getting the data
        this.loading.dismiss();        
      });
  }
  

  //ログアウト
  public logout() {
    console.log("logout")
    this.angularFire.auth.logout();
  }

  //情報取得
  public getProfile() {
    var user = firebase.auth().currentUser;
    this.username = user.displayName;
    this.coinAddress = user.photoURL; 
  }

  //ローディング表示
  showLoading() {
    if(this.loading){
      this.loading.dismiss();
    }
    this.loading = this.loadingCtrl.create({
      content: 'now loading',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}