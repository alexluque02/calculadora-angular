import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculadoraAngular';
  numeroAMostrar: string = "0"; // Inicializamos con "0" como cadena
  resultado: number = 0;
  calculado: boolean = false;

  addToScreen(num: number) {
    if (this.calculado) {
      this.numeroAMostrar = "0"
      this.calculado = false;
    }
    if (this.numeroAMostrar === "0") {
      this.numeroAMostrar = num.toString();
    } else {
      this.numeroAMostrar += num.toString();
    }
  }

  sumar() {
    this.numeroAMostrar += "+";
  }

  restar() {
    this.numeroAMostrar += "-";
  }

  calcular() {
    let operaciones = this.numeroAMostrar.split(/(\+|-)/);
    let resultado = 0;
    let operador = '+';

    operaciones.forEach((element) => {
      if (element === '+') {
        operador = '+';
      } else if (element === '-') {
        operador = '-';
      } else {
        let num = parseInt(element);
        if (operador === '+') {
          resultado += num;
        } else if (operador === '-') {
          resultado -= num;
        }
      }
    });

    this.numeroAMostrar = resultado.toString();
    this.calculado = true;
  }

  borrar() {
    this.numeroAMostrar = "0"
  }
}
