import { OrderModel } from '../orders/OrderModel';
import DataLayer from '../data/DataLayer';
import { ItemModel } from './ItemModel';

export function getItemsForOrder(order: OrderModel): ItemModel[] {
  const items = DataLayer.getItems();
  /*
    I may get all the items here and match the ones requested in the order or directly query for the items I am looking for
    */
  const itemsToReturn = [];
  for (const orderItem of order.items) {
    /** I also use the price here in order to fetch the correct item, since in the input I */
    const item = items.filter(i => i.type === orderItem.type && i.price === orderItem.price);
    itemsToReturn.push(item[0]);
  }
  return itemsToReturn;
}
