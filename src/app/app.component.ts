import { Component } from '@angular/core';
import { promises } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitán América';
  nombre2:string = 'DUvAn arMandO SarMiENtO SaNcHeZ';
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  pi:number=Math.PI;
  porcentaje:number=0.235;
  salario:number=1234.5;
  fecha:Date=new Date();
  idioma:string='es';
  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle:'Primera',
      casa:20
    }
  }
  videoUrl:string="https://www.youtube.com/embed/Emk0GICLXC8";
  activar:boolean=true;

  valorPromesa=new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });
}
