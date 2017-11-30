import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';
  constructor(public http: HttpClient,private storage: Storage,public events: Events) {
    console.log('Hello UserDataProvider Provider');
  }
  login(username: string,info:string): void {
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.setUsername(username);
       this.setUserInfo(info)
      this.events.publish('user:login');
    };
    signup(username: string): void {
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.setUsername(username);
      this.events.publish('user:signup');
    };
    logout(): void {
    console.log("borrando usuario");
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.storage.remove('userinfo');
    this.events.publish('user:logout');
  };
  setUsername(username: string): void {
    this.storage.set('username', username);
  };
  setSecureUser(user: string): void {
    this.storage.set('secureUser', user);
  };
  setUserInfo(info: string): void {
    this.storage.set('userinfo', info);
  };
  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };
  getSecureUser(): Promise<string> {
    return this.storage.get('secureUser').then((value) => {
      return value;
    });
  };
  getUserInfo(): Promise<string> {
    return this.storage.get('userinfo').then((value) => {
      return value;
    });
  };
  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };


}
