import { ConfigModel } from '../ConfigModel';
import { OrderModel } from '../orders/OrderModel';
import { getTaxAmount } from '../taxes/TaxesUtils';
import { ReceiptModel } from './ReceiptModel';

export function buildReceipts(orders: OrderModel[], config: ConfigModel): ReceiptModel[] {
  const receipts = [];
  for (const order of orders) {
    const orderReceipt: ReceiptModel = {
      orderData: [],
      totalPrice: 0,
      totalTaxAmount: 0
    };
    for (const item of order.items) {
      const taxAmount = getTaxAmount(item, config);
      const roundexTaxAmount = +roundToTwo(taxAmount);
      let itemTotalPrice = item.quantity * item.price;
      itemTotalPrice += roundexTaxAmount;
      orderReceipt.totalPrice += itemTotalPrice;
      orderReceipt.totalTaxAmount += roundexTaxAmount;
      orderReceipt.orderData.push({
        price: itemTotalPrice,
        quantity: item.quantity,
        type: item.type
      });
    }
    receipts.push(orderReceipt);
  }
  return receipts;
}

function roundToTwo(num): number {
  return Math.ceil(num / 0.05) * 0.05;
}
