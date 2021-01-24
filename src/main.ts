import { loadOrders } from './orders/LoadOrders';
import path from 'path';
import { getFile } from './utils/ReadFile';
import { getItemFromOrder } from './items/ItemUtils';
import { getTaxAmount } from './taxes/TaxesUtils';

getFile(path.join(__dirname, 'input', 'input.txt'), data => {
  const orders = loadOrders(data);
  for (const order of orders) {
    let orderTotal = 0;
    let totalTaxes = 0;
    for (const item of order.items) {
      const itemModel = getItemFromOrder(item);
      const taxAmount = getTaxAmount(itemModel);
      let totalPrice = item.quantity * itemModel.price;
      const roundexTaxAmount = +roundToTwo(taxAmount);
      totalPrice += roundexTaxAmount;
      orderTotal += totalPrice;
      totalTaxes += roundexTaxAmount;
      console.log(`${item.quantity} ${itemModel.type}: ${totalPrice.toFixed(2)}`);
    }
    console.log(`Sales Taxes: ${totalTaxes.toFixed(2)}`);
    console.log(`Total: ${orderTotal.toFixed(2)}`);
    console.log('');
  }
});

function roundToTwo(num): number {
  return Math.ceil(num / 0.05) * 0.05;
}
