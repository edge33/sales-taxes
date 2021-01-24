import { loadOrders } from './orders/LoadOrders';
import path from 'path';
import { readFile } from './utils/ReadFile';
import DataLayer from './data/DataLayer';
import { buildReceipts } from './receipts/ReceiptUtils';

const config = DataLayer.getConfig();

async function printOrders(): Promise<void> {
  const inputData = await readFile(path.join(__dirname, 'input', 'input.txt'));
  const orders = loadOrders(inputData, config);
  const receipts = buildReceipts(orders, config);
  for (const receipt of receipts) {
    for (const item of receipt.orderData) {
      console.log(`${item.quantity} ${item.type}: ${item.price.toFixed(2)}`);
    }
    console.log(`Sales Taxes: ${receipt.totalTaxAmount.toFixed(2)}`);
    console.log(`Total: ${receipt.totalPrice.toFixed(2)}`);
    console.log();
  }
}

printOrders();
