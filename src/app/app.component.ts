import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedAnimal: string | null = null;

  animals = [
    { name: 'Cat', type: 'mammal' },
    { name: 'Parrot', type: 'bird' },
    { name: 'Frog', type: 'amphibian' },
    { name: 'Shark', type: 'fish' },
  ];

  clearSelection() {
    this.selectedAnimal = null;
  }

  getAnimalColor(type: string): string {
    switch (type) {
      case 'mammal':
        return 'brown';
      case 'bird':
        return 'green';
      case 'amphibian':
        return 'purple';
      case 'fish':
        return 'blue';
      default:
        return 'black';
    }
  }
}
