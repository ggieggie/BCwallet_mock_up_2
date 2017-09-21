webpackJsonp([2],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AuthService } from '../../providers/auth-service/auth-service';


var TopPage = (function () {
    //コンストラクタ
    function TopPage(navCtrl, http, angularFire, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.angularFire = angularFire;
        this.modalCtrl = modalCtrl;
        //インスタンス
        this.username = '';
        this.email = '';
        this.bit_balance = null;
        this.maru_balance = null;
        if (this.bit_balance == null) {
            //bitcoin残高確認
            this.getBitbalance();
            //marucoin残高確認
            this.getMarubalance();
            console.log("constructor");
        }
    }
    //topのreloadボタン用関数
    TopPage.prototype.reload = function () {
        this.getBitbalance();
        this.getMarubalance();
    };
    //ビットコインの値を確認する関数
    TopPage.prototype.getBitbalance = function () {
        this.bit_balance = 100;
    };
    //マルコインの値を確認する関数
    TopPage.prototype.getMarubalance = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ "headers": headers });
        var body = {
            method: "getaddressbalances",
            params: ["1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r"],
            id: 0,
            chain_name: "chain1"
        };
        this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log("data: " + JSON.stringify(result));
            console.log("data: " + JSON.stringify(result.result[0].qty));
            console.log("data: " + JSON.stringify(result.result[0].name));
            _this.maru_balance = JSON.stringify(result.result[0].qty);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    //ログアウト
    TopPage.prototype.logout = function () {
        this.angularFire.auth.logout();
        var loginModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], {}, { "enableBackdropDismiss": false });
        loginModal.present();
    };
    return TopPage;
}());
TopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-top',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/top/top.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      トップ\n    </ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="logout()" color="primary">ログアウト︎</button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page2">\n  <p>{{username}}さんは現在２つの仮想通貨を所持しています</p>\n  <ion-list id="page2-list2" >\n    <ion-item color="none" id="page2-list-item6">\n      <ion-avatar item-left>\n        <img src="assets/img/BBJaAAcORgyRBgcyKFlM_bitcoin.png" />\n      </ion-avatar>\n      <h2>ビットコイン</h2>\n      <p>代表的な仮想通貨</p>\n      <p clear item-end>{{ bit_balance }} BTC</p>\n    </ion-item>\n\n    <ion-item color="none" id="page2-list-item7">\n      <ion-avatar item-left>\n        <img src="assets/img/ffnnctKNQeGycvDnmm0O_maru.jpg" />\n      </ion-avatar>\n      <h2>マルコイン</h2>\n      <p>戸本・清田商店で使える仮想通貨</p>\n      <p clear item-end>{{ maru_balance }} MC</p>\n    </ion-item>\n  </ion-list>\n  <div id="page3-markdown6" style="text-align:center;" class="show-list-numbers-and-dots">\n\n    <!--\n    <ion-card *ngIf="getBitbalance()">\n      <ion-card-content>\n        <p>Value: {{ bit_balance }}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf="getMarubalance()">\n      <ion-card-content>\n        <p>Value: {{ maru_balance }}</p>\n      </ion-card-content>\n    </ion-card>\n    -->\n  </div>\n  <button (click) = "reload()">reload</button>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/top/top.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */]) === "function" && _d || Object])
], TopPage);

var _a, _b, _c, _d;
//# sourceMappingURL=top.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		338,
		1
	],
	"../pages/register/register.module": [
		185
	],
	"../pages/top/top.module": [
		337,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_github_users_service_github_users_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receive_receive__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberlistPage = (function () {
    function MemberlistPage(navCtrl, alertCtrl, githubUsersSevice, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.githubUsersSevice = githubUsersSevice;
        this.http = http;
        this.qrData = "1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r";
        this.createdCode = null;
        this.scannedCode = null;
        //送金テスト用のアドレス。両方ノード[０]のアドレス
        this.testMyadress = "1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r";
        this.testYouradress = "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv";
        this.send_amount = 0;
        githubUsersSevice.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, function (err) { return console.log(err); }, function () { });
    }
    MemberlistPage.prototype.returntabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__receive_receive__["a" /* ReceivePage */]);
    };
    MemberlistPage.prototype.send = function () {
        this.showPrompt();
    };
    //送金プロンプトの表示
    MemberlistPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '送金',
                    handler: function (data) {
                        _this.send_amount = data.input_amount;
                        _this.send_marucoin();
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    //マルコインの送信
    MemberlistPage.prototype.send_marucoin = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ "headers": headers });
        var body = {
            "method": "sendfromaddress",
            //パラメータを修正しました
            //params  : [this.testMyadress, this.testYouradress, this.send_amount],
            "params": [this.testMyadress, this.testYouradress, { "marucoin": Number(this.send_amount) }],
            "id": 0,
            "chain_name": "chain1"
        };
        this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log("data: " + JSON.stringify(result));
            //console.log("data: "+JSON.stringify(result.result[0].qty));
            //console.log("data: "+JSON.stringify(result.result[0].name));
            //this.maru_balance = JSON.stringify(result.result[0].qty);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    return MemberlistPage;
}());
MemberlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-memberlist',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/memberlist/memberlist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      送金先を選択してください。\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="returntabs()" color="primary">キャンセル</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item (click)="send()" *ngFor="let user of users">\n      <ion-avatar item-left>\n        <img [src]="user.avatar_url">\n      </ion-avatar>\n      <h2>id : {{ user.id }}</h2>\n      <h2>name : {{ user.login }}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/memberlist/memberlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_github_users_service_github_users_service__["a" /* GithubUsersService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], MemberlistPage);

//# sourceMappingURL=memberlist.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubUsersService = (function () {
    function GithubUsersService(http) {
        this.http = http;
    }
    GithubUsersService.prototype.getUsers = function () {
        return this.http.get('https://api.github.com/users')
            .map(function (res) { return res.json(); });
    };
    return GithubUsersService;
}());
GithubUsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GithubUsersService);

//# sourceMappingURL=github-users-service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionPage = (function () {
    function TransactionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return TransactionPage;
}());
TransactionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transaction',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/transaction/transaction.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      トークン取引\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <h1 id="page4-heading2" style="color:#000000;text-align:center;">\n    トレンド\n  </h1>\n  <div id="page4-container3"></div>\n  <h4 id="page4-heading3" style="color:#000000;text-align:center;">\n    独自トークンを使ってみよう\n  </h4>\n  <div id="page4-markdown12" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      １.　取引したいトークン名を検索して選択\n    </p>\n  </div>\n  <div id="page4-markdown13" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      ２.　買い、もしくは売りを選択\n    </p>\n  </div>\n  <div id="page4-markdown14" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      ３.　売買する価格と注文量を入力\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/transaction/transaction.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TransactionPage);

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_log_service_log_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receive_receive__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogPage = (function () {
    function LogPage(navCtrl, logService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.logService = logService;
        logService.getLog()
            .subscribe(function (logs) {
            _this.logs = logs;
        }, function (err) { return console.log(err); }, function () { });
    }
    LogPage.prototype.returntabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__receive_receive__["a" /* ReceivePage */]);
    };
    return LogPage;
}());
LogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-log',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/log/log.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      取引履歴\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let log of logs">\n      <ion-avatar item-left>\n        <img [src]="log.avatar_url">\n      </ion-avatar>\n      <h2>id : {{ log.id }}</h2>\n      <h2>name : {{ log.login }}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/log/log.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_log_service_log_service__["a" /* LogService */]])
], LogPage);

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogService = (function () {
    function LogService(http) {
        this.http = http;
    }
    LogService.prototype.getLog = function () {
        return this.http.get('https://api.github.com/users')
            .map(function (res) { return res.json(); });
    };
    return LogService;
}());
LogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], LogService);

//# sourceMappingURL=log-service.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AuthService } from '../../providers/auth-service/auth-service';
var RegisterPage = (function () {
    //コンストラクタ
    function RegisterPage(navCtrl, alertCtrl, loadingCtrl, navParams, angularFire, viewCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.angularFire = angularFire;
        this.viewCtrl = viewCtrl;
    }
    //登録処理
    RegisterPage.prototype.createUser = function () {
        var _this = this;
        this.angularFire.auth.createUser({
            email: this.email,
            password: this.password
        }).then(function (_) {
            var alert = _this.alertCtrl.create({
                title: '完了',
                subTitle: 'ユーザが作成されました。',
                buttons: ['OK']
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'エラー',
                subTitle: String(err),
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>ユーザー登録</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content" padding>\n  <div class="login-box">\n\n    <form (ngSubmit)="createUser()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">登録</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AuthService } from '../../providers/auth-service/auth-service';

var AccountPage = (function () {
    function AccountPage(alertCtrl, navCtrl
        //, private auth: AuthService
    ) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        //インスタンス
        this.username = 'a';
        this.email = 'a';
        //ユーザー情報取得
        //let info = this.auth.getUserInfo();
        //this.username = info['name'];
        //this.email = info['email'];
    }
    AccountPage.prototype.returntabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      アカウント情報\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="returntabs()" color="primary">戻る︎</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{username}}</h2>\n    <h2>{{email}}</h2>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/account/account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]
        //, private auth: AuthService
    ])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage.prototype.returntabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>各種お問い合わせ</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="returntabs()" color="primary">戻る︎</button>\n    </ion-buttons>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/rogo.png" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">お問い合わせ内容を記載し送信ボタンを押してください。</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">送信</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/support/support.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return TutorialPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], TutorialPage.prototype, "slides", void 0);
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">スキップする</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>ICA</b>\n      </h2>\n      <p>\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n      <h2 class="slide-title" >What is Ionic?</h2>\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n      <h2 class="slide-title">What is Ionic Platform?</h2>\n      <p>The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/tutorial/tutorial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(335);


Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_0__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_top_top__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_receive_receive__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_transaction_transaction__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_log_log__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_memberlist_memberlist__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_account__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_support_support__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tutorial_tutorial__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_github_users_service_github_users_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_log_service_log_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_register_module__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { AuthService } from '../providers/auth-service/auth-service';







var firebaseConfig = {
    apiKey: "AIzaSyBj1l9IqIg-3OlgpS1wnS5xXcbYE4cdDmc",
    authDomain: "marucoin-9b.firebaseapp.com",
    databaseURL: "https://marucoin-9b.firebaseio.com",
    projectId: "marucoin-9b",
    storageBucket: "marucoin-9b.appspot.com",
    messagingSenderId: "482806641126"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_top_top__["a" /* TopPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_receive_receive__["a" /* ReceivePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_transaction_transaction__["a" /* TransactionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_log_log__["a" /* LogPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            //RegisterPage,
            __WEBPACK_IMPORTED_MODULE_17__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_memberlist_memberlist__["a" /* MemberlistPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/top/top.module#TopPageModule', name: 'TopPage', segment: 'top', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__["a" /* NgxQRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_23__pages_register_register_module__["RegisterPageModule"],
            __WEBPACK_IMPORTED_MODULE_22_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseConfig, {
                provider: __WEBPACK_IMPORTED_MODULE_22_angularfire2__["d" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_22_angularfire2__["c" /* AuthMethods */].Password
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_top_top__["a" /* TopPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_receive_receive__["a" /* ReceivePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_transaction_transaction__["a" /* TransactionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_log_log__["a" /* LogPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_memberlist_memberlist__["a" /* MemberlistPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            //AuthService,
            __WEBPACK_IMPORTED_MODULE_20__providers_github_users_service_github_users_service__["a" /* GithubUsersService */],
            __WEBPACK_IMPORTED_MODULE_21__providers_log_service_log_service__["a" /* LogService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_support_support__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tutorial_tutorial__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.appPages = [
            { title: 'アカウント情報', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: '各種設定', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_support_support__["a" /* SupportPage */], icon: 'information-circle' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.navCtrl.getActiveChildNavs().length && page.index != undefined) {
            this.navCtrl.getActiveChildNavs()[0].select(page.index);
            // Set the root of the nav with params if it's a tab index
        }
        else {
            this.navCtrl.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
    };
    MyApp.prototype.openAccount = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */]);
    };
    MyApp.prototype.openSupport = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_support_support__["a" /* SupportPage */]);
    };
    MyApp.prototype.openTutorial = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.navCtrl.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.navCtrl.getActive() && this.navCtrl.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/app/app.html"*/'<ion-menu [content]="mainContent">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content id="side-menu21">\n\n    <ion-list id="menu-list1">\n      <ion-list-header>\n        管理・設定\n      </ion-list-header>\n      <button ion-item menuClose (click)="openAccount()">\n        <ion-icon item-start name="person"></ion-icon>\n        アカウント管理\n      </button>\n      <button ion-item menuClose (click)="openSupport()">\n        <ion-icon item-start name="help"></ion-icon>\n        各種お問い合わせ\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        チュートリアル\n      </ion-list-header>\n      <button ion-item menuClose (click)="openTutorial()">\n        <ion-icon item-start name="hammer"></ion-icon>\n        チュートリアルを参照する\n      </button>\n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_top__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receive_receive__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_transaction__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_log__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__top_top__["a" /* TopPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__receive_receive__["a" /* ReceivePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__transaction_transaction__["a" /* TransactionPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__log_log__["a" /* LogPage */];
    }
    TabsPage.prototype.goToTop = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__top_top__["a" /* TopPage */]);
    };
    TabsPage.prototype.goToReceive = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__receive_receive__["a" /* ReceivePage */]);
    };
    TabsPage.prototype.goToTransaction = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transaction_transaction__["a" /* TransactionPage */]);
    };
    TabsPage.prototype.goToLog = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__log_log__["a" /* LogPage */]);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="トップ" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="受送金" tabIcon="cash"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="トークン取引" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="履歴" tabIcon="refresh"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__memberlist_memberlist__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReceivePage = (function () {
    //コンストラクタ
    function ReceivePage(barcodeScanner, alertCtrl, navCtrl, http) {
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.qrData = "1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r";
        this.createdCode = null;
        this.scannedCode = null;
        //送金テスト用のアドレス。両方ノード[０]のアドレス
        this.testMyadress = "1Zz3rAJ5mBTQepG5uJbkuvF79f3FaKvmyR7f3r";
        this.testYouradress = "18ZbcevCh61jtkVbQ1tdwCWEg2kxrW8GULBCQv";
        this.send_amount = 0;
    }
    //constructor(public alertCtrl: AlertController) { }
    //QRコードの作成
    ReceivePage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    //QRコードの読み取り
    ReceivePage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    //送金プロンプトの表示
    ReceivePage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '送金',
                    handler: function (data) {
                        _this.send_amount = data.input_amount;
                        _this.send_marucoin();
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    //マルコインの送信
    ReceivePage.prototype.send_marucoin = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic bXVsdGljaGFpbnJwYzoyR2tXWjlnMjhYTDNBUHpXcGJVM0p4TmlYSHBSRWRmVTRmWTl1YXdYOWpoWg==');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ "headers": headers });
        var body = {
            "method": "sendfromaddress",
            //パラメータを修正しました
            //params  : [this.testMyadress, this.testYouradress, this.send_amount],
            "params": [this.testMyadress, this.testYouradress, { "marucoin": Number(this.send_amount) }],
            "id": 0,
            "chain_name": "chain1"
        };
        this.http.post("https://yqqc8r7eeh.execute-api.us-west-2.amazonaws.com/prod/ab", body, options)
            .map(function (response) { return response.json(); })
            .subscribe(function (result) {
            console.log("data: " + JSON.stringify(result));
            //console.log("data: "+JSON.stringify(result.result[0].qty));
            //console.log("data: "+JSON.stringify(result.result[0].name));
            //this.maru_balance = JSON.stringify(result.result[0].qty);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    //送信相手リストの表示
    ReceivePage.prototype.showRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                _this.showPrompt();
            }
        });
        alert.present();
    };
    //QRコードから相手と繋がって中電コインを送る
    ReceivePage.prototype.scanCode_main = function () {
        this.scanCode();
        this.showPrompt();
    };
    //送信リストから相手を選んで中電コインを送る
    ReceivePage.prototype.selectCode_main = function () {
        //this.showRadio();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__memberlist_memberlist__["a" /* MemberlistPage */]);
    };
    return ReceivePage;
}());
ReceivePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-receive',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/receive/receive.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      受送金\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <div id="page3-markdown3" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p>\n      URL（QRコード）を通して仮想通貨を受け取ったり、相手に送金することができます。\n    </p>\n  </div>\n  <div id="page3-markdown6" style="text-align:center;" class="show-list-numbers-and-dots">\n    <!--\n     <ion-item>\n      //今はここに打ち込みテストしていますが、URLは内部でゲットしてくるようにします\n        <ion-input type="text" placeholder="MY QR Code data" [(ngModel)]="qrData">\n        </ion-input>\n     </ion-item>\n    -->\n    <button ion-button full icon-left (click)="createCode()"><ion-icon name="apps"></ion-icon>自分のURLを表示</button>\n\n    <ion-card *ngIf="createdCode">\n      <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n      <ion-card-content>\n        <p>あなたのアドレス: {{ createdCode }}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <button ion-button full icon-left (click)="scanCode_main()" color="secondary"><ion-icon name="qr-scanner"></ion-icon>URLをスキャンして送金</button>\n    <button ion-button full icon-left (click)="selectCode_main()" color="secondary"><ion-icon name="albums"></ion-icon>URLを選択して送金</button>\n\n    <ion-card *ngIf="scannedCode">\n      <ion-card-content>\n        Result from Scan: {{ scannedCode }}\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/receive/receive.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], ReceivePage);

//# sourceMappingURL=receive.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AuthService } from '../../providers/auth-service/auth-service';
var LoginPage = (function () {
    //コンストラクタ
    function LoginPage(navCtrl, alertCtrl, loadingCtrl, navParams, angularFire, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.angularFire = angularFire;
        this.viewCtrl = viewCtrl;
        //認証
        angularFire.auth.subscribe(function (state) {
            _this.authState = state;
            console.log("auth" + JSON.stringify(state));
            if (_this.authState != null) {
                // 認証情報がnullでない場合（認証できている場合） データを取得
                angularFire.database.list('/talks').subscribe(function (value) { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return console.log("error"); });
            }
            else {
                // 認証情報がnullの場合（認証できていない場合） 何もしない
            }
        });
    }
    //アカウント作成
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push('RegisterPage');
    };
    //ログイン処理
    LoginPage.prototype.login = function () {
        var _this = this;
        //this.showLoading()
        this.angularFire.auth.login({
            email: this.email,
            password: this.password
        }).then(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'ログインエラー',
                subTitle: String(err),
                buttons: ['OK']
            });
            alert.present();
            console.log(err);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/sumiden/dev/wallet2/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <P>ブロックチェーンデモアプリ ver.0.01</P>\n      <img src="assets/img/rogo.png" alt="Ionic Logo">\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid" (click)="login()">ログイン</button>\n          <button ion-button class="register-btn" block clear (click)="createAccount()">新しくアカウントを作成する</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sumiden/dev/wallet2/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[235]);
//# sourceMappingURL=main.js.map