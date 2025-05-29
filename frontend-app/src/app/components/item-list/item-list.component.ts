import { Component, OnInit } from '@angular/core';
//import { ItemService } from 'src/app/services/item.service';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule],
  standalone: true,
  template: `
    <h3>Lista de Ítems</h3>
    <ul>
      <li *ngFor="let item of items">
        {{ item.nombre }} - {{ item.descripcion }}
      </li>
    </ul>
  `,
  styles: []
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(data => this.items = data);
  }
}
