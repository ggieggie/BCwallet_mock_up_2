import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogService } from '../../providers/log-service/log-service';
import { Log } from '../../providers/log-service/mylog';
import { TabsPage } from '../tabs/tabs';
import { ReceivePage } from '../receive/receive';
import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})
export class LogPage {
  logs: Log[];
  myAddress = "";
  transaction ="";

  constructor(public navCtrl: NavController, private logService: LogService,
    public http: Http) {}

  get() {
    this.getProfile();
    this.listTransactions();
  }

  //履歴確認
  listTransactions(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
    var options = new RequestOptions({ "headers": headers });
    var body = {
      "method"  : "listaddresstransactions",
      "params"  : [this.myAddress],
      "id"    : 0,
      "chain_name": "chain1"
    }
    this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
      .map(response => response.json())
      .subscribe(result => {
        console.log("transactions: "+JSON.stringify(result));
        console.log("transactions: "+JSON.stringify(result.result[1]));
        
        if(!JSON.stringify(result.result[1])) {
          console.log("no log");
        }else{
        console.log("transactions: "+JSON.stringify(result.result[1].balance.assets[0].qty));
        console.log("transactions: "+JSON.stringify(result.result[1].addresses[0]));        
        console.log("transactions: "+JSON.stringify(result.result));                
        var temp = result.result.splice(0,1);
        this.logs = result.result
        }
        }, 
        error => console.log(error),// Error getting the data
       () => {});
      
  }

  //情報取得
  public getProfile() {
    var user = firebase.auth().currentUser;
    this.myAddress = user.photoURL;
  }

　public returntabs() {
      this.navCtrl.setRoot(ReceivePage);
  }

}
