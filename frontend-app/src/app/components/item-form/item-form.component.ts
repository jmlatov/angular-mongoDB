import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { ItemService } from 'src/app/services/item.service';
import { ItemService } from '../../services/item.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>Agregar Ítem</h3>
    <form (submit)="agregarItem()">
      <input [(ngModel)]="nombre" name="nombre" placeholder="Nombre" required />
      <input [(ngModel)]="descripcion" name="descripcion" placeholder="Descripción" required />
      <button type="submit">Agregar</button>
    </form>
  `,
  styles: []
})
export class ItemFormComponent {
  nombre = '';
  descripcion = '';

  constructor(private itemService: ItemService) {}

  agregarItem() {
    const nuevoItem = { nombre: this.nombre, descripcion: this.descripcion };
    this.itemService.addItem(nuevoItem).subscribe(() => {
      this.nombre = '';
      this.descripcion = '';
    });
  }
}
