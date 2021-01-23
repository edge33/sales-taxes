import { ItemModel } from '../items/ItemModel';
import DataLayer from '../data/DataLayer';

export function computePriceWithTaxes(item: ItemModel): number {
  const config = DataLayer.getConfig();
  let newPrice = item.price;
  if (!config.exceptedCategories.includes(item.category)) {
    newPrice += getTaxValue(newPrice, config.baseTaxesPercentage);
  }

  return newPrice;
}

function getTaxValue(price, taxPercentage): number {
  return Math.ceil(((price * taxPercentage) / 100) * 100) / 100;
}
