import { ConfigModel } from '../ConfigModel';
import DataLayer from '../data/DataLayer';
import { OrderModel } from './OrderModel';

export function loadOrders(data: string[], config: ConfigModel): OrderModel[] {
  const orders: OrderModel[] = [];
  let newOrder: OrderModel = { items: [] };
  const itemCategoryMappings = DataLayer.GetItemCategoryMappings();
  for (const line of data) {
    if (line === '') {
      orders.push(newOrder);
      newOrder = { items: [] };
    } else {
      const [_, quantity, type, price] = line.match(/(\d+) (.*) at (\d+\.\d+)/);
      newOrder.items.push({
        price: +price,
        quantity: +quantity,
        type,
        taxable: !config.exceptedCategories.includes(itemCategoryMappings[type.replace('imported ', '')]),
        imported: type.includes('imported')
      });
    }
  }
  return orders;
}
