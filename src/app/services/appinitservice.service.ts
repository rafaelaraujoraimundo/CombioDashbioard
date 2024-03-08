import { Injectable } from '@angular/core';
import { MingleService } from '@totvs/mingle';
@Injectable()
export class AppInitService {

 constructor(private mingleService: MingleService) { }

 mingleConfiguration(): Promise<any> {
   return new Promise((resolve, reject) => {
     console.log("Mingle Service Configuration called");
     const server = 'https://mingle.totvs.com.br';
     const appId = '5c083ba08fdf2a00011ff8d0';
     const web = true;

     this.mingleService.init(server, appId, web)
      .then( init => {
       resolve('Mingle Service Init');
     }).catch(error => {
        console.log('Passou aqui')
       console.log("error inicio" , error);

       reject(error);
     });
    console.log("Mingle Service configuration completed");
   });
 }}
