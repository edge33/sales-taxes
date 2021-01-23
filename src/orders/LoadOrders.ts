import { OrderModel } from './OrderModel';

export function loadOrders(data: string[]): OrderModel[] {
  const orders: OrderModel[] = [];
  let newOrder: OrderModel = { items: [] };

  for (const line of data) {
    if (line === '') {
      orders.push(newOrder);
      newOrder = { items: [] };
    } else {
      const [_, quantity, type, price] = line.match(/(\d+) (.*) at (\d+\.\d+)/);
      newOrder.items.push({
        price: +price,
        quantity: +quantity,
        type
      });
    }
  }
  return orders;
}
