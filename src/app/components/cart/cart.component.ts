import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Order } from 'src/app/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Event to be fired to app.component
  @Output()
  onNewOrder = new Subject<Order>()

  // VARIABLES
  form!:FormGroup
  lineItems!:FormArray

  // CONSTRUCTOR
  constructor(private fb:FormBuilder) {}

  // METHODS
  ngOnInit(): void {
      this.form = this.createForm()
  }

  // Triggered upon 'Checkout'
  processForm() {
    // Form values are retrieved as Order object
    const order:Order = this.form.value as Order 
    console.info('>>> Order: ', order)
    // Push order on to app.component
    this.onNewOrder.next(order)
    // On submit, form is refreshed and fields cleared
    this.form = this.createForm()
  }

  // Triggered upon 'Add'
  addLineItem() {
    console.info('Adding line item')
    this.lineItems.push(this.createLineItem())
  }

  // Triggered upon 'X'
  removeLineItem(i:number) {
    this.lineItems.removeAt(i)
  }

  // Create form group for single line item
  private createLineItem():FormGroup {
    return this.fb.group({
      // Setting item default as empty string, quantity as 1, unitPrice as 5
      item:this.fb.control<string>(''),
      quantity:this.fb.control<number>(1),
      unitPrice:this.fb.control<number>(5)
    })
  }

  private createForm():FormGroup {
    // Create form array for line items so it can be linked as form control
    this.lineItems = this.fb.array([])
    return this.fb.group({
      name:this.fb.control<string>(''),
      address:this.fb.control<string>(''),
      email:this.fb.control<string>(''),
      phone:this.fb.control<string>(''),
      lineItems:this.lineItems
    })
  }
}
