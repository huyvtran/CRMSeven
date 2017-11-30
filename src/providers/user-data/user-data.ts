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
    console.log('username guardado');
  };
  setSecureUser(user: string): void {
    this.storage.set('secureUser', user);
  };
  setUserInfo(info: any): void {
    console.log(info);
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
  getUserInfo(): Promise<any> {
    return this.storage.get('userinfo').then((value) => {
      return value;
    });
  };
  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  setConnectionsPreference(selected:boolean):void{
    this.storage.set('SettedConnection',selected);
  }
  getConnectionsPreference():Promise<boolean>{
    return this.storage.get('SettedConnection').then(value=>{
      return value;
    })
  }
  setSavedConnections(conex:string){
      this.storage.set('SavedConnection',conex);
  }
  getSavedConnections():Promise<string>{
    return this.storage.get('SavedConnection').then(value=>{
      return value;
    })
  }

}