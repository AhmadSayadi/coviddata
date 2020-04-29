import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

   constructor(
        // private router: Router,
        private ServiceData: AppService,
    ) {

    }
    daunia ={deaths:'',recovered:'',confirmed:''}
    duniadeaths ='';
    duniarecovered:'';
    duniaconfirmed:'';
    idperawatan:'';
    idkonfirmasi:'';
    idsembuh: '';
    idmati: '';
    provinsi=[];



  ngOnInit() {
    this.ServiceData.dataid()
          .subscribe(
            data => {
                console.log(data);
                this.idmati = data.meninggal;
                this.idsembuh= data.sembuh;
                 this.idkonfirmasi= data.jumlahKasus;
                this.idperawatan =data.perawatan;
              },
              error => {
              
              }
      );  

      this.ServiceData.dataworld()
          .subscribe(
            data => {
              this.daunia = data
              this.duniadeaths = data.deaths.value;
              this.duniarecovered= data.recovered.value;
              this.duniaconfirmed =data.confirmed.value;
              },
              error => {
              
              }
          );  
      this.ServiceData.dataprov()
          .subscribe(
            data => {
              // this.daunia = data
              // this.provinsi = data;
              console.log(data);
              
              data.data.forEach(item => {
                this.provinsi.push({
                  provinsi: item.provinsi,
                  positif:item.kasusPosi,
                  sembuh:item.kasusSemb,
                  meninggal:item.kasusMeni,
                  // update: moment(item.pembaruan, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY HH:mm"),
                  
                })
              });
              
              console.log(this.provinsi);

    //           data.data.nodes = _.chain(data)
    // // Group the elements of Array based on `color` property
    //           .groupBy("color")
    //           // `key` is group's name (color), `value` is the array of objects
    //           .map((value, key) => ({ color: key, users: value }))
    //           .value()
              
              },
              error => {
              
              }
      );  

          
    }
}
