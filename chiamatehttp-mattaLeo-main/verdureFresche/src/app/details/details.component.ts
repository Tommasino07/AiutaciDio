import { Component, input, Input } from '@angular/core';
import { Vegetable } from '../vegetables.model';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() dettagli!: Vegetable
}
