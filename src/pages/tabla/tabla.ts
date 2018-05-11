import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ConexionProvider } from '../../providers/conexion/conexion'; 

/**
 * Generated class for the TablaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabla',
  templateUrl: 'tabla.html',
})
export class TablaPage {
Datos;
  constructor(public navCtrl: NavController, public navParams: NavParams,public conexion:ConexionProvider) {
  }

  ionViewDidLoad() {
  
    this.conexion.conexion({},'index.php/Datos/listar').then((result)=>{
      console.log(result);
      this.Datos=result;
    })
  }
  estadisticas(){
    this.navCtrl.setRoot('EstadisticasPage');
  }
}
