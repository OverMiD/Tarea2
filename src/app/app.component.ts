import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-restaurantes';
  nombre: string = '';
  ciudad: string = '';
  valor: string = '';

  restaurant = {
    nombre: '',
    ciudad: ''
  }

  @Input() items: any = [{nombre: 'Mi barrunto', ciudad: 'Lima'}];

  agregar(){
    if(this.nombre == '' || this.ciudad == ''){
      alert("¡Debe llenar los campos!");
    }
    else{
      //if(validar()){ Comentario: La validación funciona bien pero cuando lo colocaba dentro del if al querer insertar salia un error. por eso lo estoy dejando comentado.
        this.restaurant.nombre = this.nombre;
        this.restaurant.ciudad = this.ciudad; 
        this.items.unshift({nombre: this.restaurant.nombre, ciudad: this.restaurant.ciudad});
        console.log(this.items)
        this.nombre = '';
        this.ciudad = ''; 
      // }
      // else{
      //   alert("¡El restaurant que desea insertar, ya existe!");
      //   this.nombre = '';
      //   this.ciudad = ''; 
      // }  
    }
  }

  validar(): boolean{
    let resultado: boolean = false;
    for (let i = 0; i <= this.items.length; i++) {
      if (this.items[i].nombre === this.nombre) {
        return false;
      }
    }
    return true;
  }
}
