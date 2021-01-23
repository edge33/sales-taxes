export interface OrderModel {
  items: OrderItemModel[];
}

export interface OrderItemModel {
  type: string;
  price: number;
  quantity: number;
}
