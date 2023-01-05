import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activarcontasena',
})
export class ActivarcontasenaPipe implements PipeTransform {
  transform(value: string, activar: boolean): string {
    console.log(value);
    console.log(activar);
    if (activar) {
      let contrasena = '';
      for (let i = 0; i < value.length; i++) {
        contrasena = contrasena + '*';
      }
      return contrasena;
    } else {
      return value;
    }
  }
}
