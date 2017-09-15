import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   constructor(public navCtrl: NavController) {
         
     }
  }
