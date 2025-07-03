import { Component, Input } from '@angular/core';
import { PizzariaInterface } from '../../interfaces/PizzariaInterface';

@Component({
  selector: 'app-pizzaria',
  standalone: false,
  templateUrl: './pizzaria.html',
  styleUrl: './pizzaria.css'
})
export class Pizzaria {
  @Input()
  pizza!: PizzariaInterface;
}
