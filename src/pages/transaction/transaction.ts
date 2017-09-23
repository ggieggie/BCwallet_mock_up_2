import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})
export class TransactionPage {

  block = null;
  assets = "";
  totalBalance = "";

  constructor(public navCtrl: NavController, public http: Http) {}

  get() {
    this.getBlock();
    this.getAssets();
  }
  
  //ブロック数確認
  getBlock() {
    var user = firebase.auth().currentUser;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
    var options = new RequestOptions({ "headers": headers });
    var body = {
      method  : "getinfo",
      params  : [],
      id    : 0,
      chain_name: "chain1"
    }
    this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
      .map(response => response.json())
      .subscribe(result => {
        //console.log("data: "+JSON.stringify(result));
        if(JSON.stringify(result.result) == "null" || JSON.stringify(result.result) == "[]"){
          console.log("no balance");
          this.block = "error";
        }else{
        console.log("info: "+JSON.stringify(result.result));          
        this.block = JSON.stringify(result.result.blocks);
        }
        }, error => {
        console.log(error);// Error getting the data
      });
  }

  //assets確認
  getAssets() {
    var user = firebase.auth().currentUser;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
    var options = new RequestOptions({ "headers": headers });
    var body = {
      method  : "listassets",
      params  : [],
      id    : 0,
      chain_name: "chain1"
    }
    this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
      .map(response => response.json())
      .subscribe(result => {
        //console.log("data: "+JSON.stringify(result));
        if(JSON.stringify(result.result) == "null" || JSON.stringify(result.result) == "[]"){
          console.log("no balance");
          this.assets = "error";
        }else{
        console.log("info: "+JSON.stringify(result.result));          
        this.assets = JSON.stringify(result.result[0].name);
        this.totalBalance= JSON.stringify(result.result[0].issueqty)
        }
        }, error => {
        console.log(error);// Error getting the data
      });
  }

}
