import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from "../../providers/api-service/api-service";

/**
 * Generated class for the TemperaturaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temperatura',
  templateUrl: 'temperatura.html',
  providers: [
    ApiServiceProvider
  ]
})
export class TemperaturaPage {

  public temperatura = String;
  public cidade = String;
  public dia = String;
  public umidadeAr: String;
  public velocidadeVento: String;
  public pontoOrvalho: String;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public apiServiceProvider: ApiServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemperaturaPage');
    this.apiServiceProvider.getTemperatura().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.temperatura = objeto_retorno.data.temperatura;
        //this.cidade = objeto_retorno.data.cidade;
        this.dia = objeto_retorno.data.dia;
        this.umidadeAr = objeto_retorno.data.umidade;
        this.velocidadeVento = objeto_retorno.data.velocidadevento;
        this.pontoOrvalho = objeto_retorno.data.orvalho;

        console.log(objeto_retorno.data);
      }, error => {
        console.log(error);
      }
    )
  }

}
