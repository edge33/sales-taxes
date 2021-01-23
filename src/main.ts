import { loadOrders } from './orders/LoadOrders';
import path from 'path';
import { getFile } from './utils/ReadFile';
import { getItemsForOrder } from './items/ItemUtils';
import { computePriceWithTaxes } from './taxes/TaxesUtils';

getFile(path.join(__dirname, 'input', 'input.txt'), data => {
  const orders = loadOrders(data);
  const items = getItemsForOrder(orders[0]);
  for (const item of items) {
    let computedPrice = computePriceWithTaxes(item);
    console.log(computedPrice);
    
  }
});

// const dataLayer = new DataLayer();
