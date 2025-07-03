import { Component } from '@angular/core';
import { PizzariaInterface } from './interfaces/PizzariaInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'projeto-pizzaria';

  exibicao: string= 'cards';

  listaPizza: PizzariaInterface[] = [
    {
      foto: "../../../assets/images/marguerita.jpg",
      card:0,
      sabor: "Marguerita",
      tamanho: "Média",
      preco: 45,
    },
    {
      foto: "assets/images/portuguesa.jpeg.jpg",
      card:1,
      sabor: "Portuguesa",
      tamanho: "Grande",
      preco: 60,
    },
    {
      foto: "assets/images/quatro-queijos.jpg",
      card:2,
      sabor: "Quatro Queijos",
      tamanho: "Média",
      preco: 45,
    }
  ]
}

