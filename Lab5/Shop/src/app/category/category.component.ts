import { Component } from '@angular/core';
import { categories } from '../categories'
import { Category } from '../categories';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[] = [...categories];
  toggle(id: number) {
    this.categories = this.categories.map(category => {
      if (category.id === id) {
        category.isOpen = !category.isOpen;
      }
      return category;
    });
  }
}


