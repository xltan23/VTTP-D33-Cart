import { Component } from '@angular/core';
import { Order } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngCart';

  // VARIABLES
  order!:Order
  customerName!:string

  // METHODS
  // Order object pulled from cart.component
  processNewOrder(order:Order) {
    // Define order and customerName
    this.order = order
    this.customerName = order.name
    console.info('>>>In app.component: ', this.order)
  }
}
