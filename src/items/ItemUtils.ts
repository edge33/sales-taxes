import { OrderItemModel } from '../orders/OrderModel';
import DataLayer from '../data/DataLayer';
import { ItemModel } from './ItemModel';

export function getItemFromOrder(item: OrderItemModel): ItemModel {
  return DataLayer.getItems().filter(i => i.type === item.type && i.price === item.price)[0];
}
