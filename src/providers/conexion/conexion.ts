import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';

/*
  Generated class for the ConexionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConexionProvider {
  apiUrl='https://tesisrio.herokuapp.com/';
  //apiUrl='http://localhost/TesisRio/';
loading;
  constructor(public http: HttpClient,public loadingCtrl:LoadingController) {
    console.log('Hello ConexionProvider Provider');
  }
  conexion(data, url) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + url, data, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
        .subscribe(res => {
          this.loading.dismiss();
          resolve(res);
        }, (err) => {
          reject(err);
          this.loading.dismiss();
        });
    });
  }
}
