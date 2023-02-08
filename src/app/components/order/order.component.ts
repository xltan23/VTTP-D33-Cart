import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnChanges {

  // Order and Customer name pulled from app.component
  @Input()
  order:Order | null = null

  // VARIABLES
  total = 0

  // changes takes in whatever change been done to Input
  ngOnChanges(changes:SimpleChanges):void {
    console.log(changes['order'].currentValue)
    // changes['property name'] returns SimpleChange {previousValue: undefined, currentValue: undefined, firstChange: true}
    console.info('changes: ', changes['order'])
    // changes['property name'].currentValue returns object {name:'',address:'',email:'',phone:'',lineItems:Array}
    const o = changes['order'].currentValue as Order
    this.total = 0;
    // Tabulate total cost of cart to be generated on change 
    for (let li of o.lineItems) {
      this.total += li.quantity * li.unitPrice
    }
  }
}
