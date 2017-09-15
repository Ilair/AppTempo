import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class ApiServiceProvider {
private caminhoBase = "http://estacao.setrem.com.br/api";
  constructor(public http: Http) {
    //console.log('Hello ApiServiceProvider Provider');
  }


  getTemperatura(){
    return this.http.get(this.caminhoBase + "/ultimaleitura");
  }

}
