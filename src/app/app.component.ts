import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculadoraAngular';
  numeroAMostrar: number = 0;
  addToScreen(num: number) {
    this.numeroAMostrar = num;
  }
}
