import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { LoginPage } from '../pages/login/login';
import { TopPage } from '../pages/top/top';
import { ReceivePage } from '../pages/receive/receive';
import { TransactionPage } from '../pages/transaction/transaction';
import { LogPage } from '../pages/log/log';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { MemberlistPage } from '../pages/memberlist/memberlist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AuthService } from '../providers/auth-service/auth-service';

import { AccountPage } from '../pages/account/account';
import { SupportPage } from '../pages/support/support';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { GithubUsersService } from '../providers/github-users-service/github-users-service';
import { LogService } from '../providers/log-service/log-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TopPage,
    ReceivePage,
    TransactionPage,
    LogPage,
    TabsPage,
    RegisterPage,
    AccountPage,
    SupportPage,
    TutorialPage,
    MemberlistPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TopPage,
    ReceivePage,
    TransactionPage,
    LogPage,
    TabsPage,
    RegisterPage,
    AccountPage,
    SupportPage,
    TutorialPage,
    MemberlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    AuthService,
    GithubUsersService,
    LogService
  ]
})
export class AppModule {
}
