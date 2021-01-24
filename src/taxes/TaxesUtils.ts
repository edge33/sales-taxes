import { ConfigModel } from '../ConfigModel';
import { OrderItemModel } from '../orders/OrderModel';

export function getTaxAmount(item: OrderItemModel, config: ConfigModel): number {
  let taxAmount = 0;
  if (item.taxable) {
    taxAmount = getTaxValue(item.price, config.baseTaxesPercentage);
  }
  if (item.imported) {
    taxAmount += getTaxValue(item.price, config.importTaxPercentage);
  }
  return taxAmount;
}

function getTaxValue(price, taxPercentage): number {
  return (price * taxPercentage) / 100;
}
