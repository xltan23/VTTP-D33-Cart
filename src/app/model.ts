export interface Order {
    name:string
    address:string
    email:string
    phone:string
    lineItems:LineItem[]
}

export interface LineItem {
    item:string
    quantity:number
    unitPrice:number
}