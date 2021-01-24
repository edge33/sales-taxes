import { ItemModel } from '../items/ItemModel';
import DataLayer from '../data/DataLayer';

export function getTaxAmount(item: ItemModel): number {
  const config = DataLayer.getConfig();
  let taxAmount = 0;
  if (!config.exceptedCategories.includes(item.category)) {
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
