import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../categories';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ShareButtonsModule, ShareIconsModule, FontAwesomeModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() del = new EventEmitter();

  delete() {
    this.del.emit(this.product.id);
  }

  like() {
    if (this.product.liked) {
      this.product.likes--;
      this.product.liked = false;
    }
    else {
      this.product.likes++;
      this.product.liked = true;
    }
  }
}


