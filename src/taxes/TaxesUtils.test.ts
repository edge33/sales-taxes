import { expect } from 'chai';
import { ConfigModel } from '../ConfigModel';
import { OrderItemModel } from '../orders/OrderModel';
import { getTaxAmount } from './TaxesUtils';

describe('TaxesUtils tests...', () => {
  const config: ConfigModel = {
    baseTaxesPercentage: 10,
    exceptedCategories: ['books', 'food', 'medicals'],
    importTaxPercentage: 5
  };
  it('should get correct tax amount for items not in excepted categories', () => {
    const item: OrderItemModel = {
      imported: false,
      taxable: true,
      price: 14.99,
      quantity: 1,
      type: ''
    };

    const taxAmount = getTaxAmount(item, config);
    expect(taxAmount).to.equal(1.499);
  });

  it('should return 0 as tax amount for items in excepted categories', () => {
    const item: OrderItemModel = {
      imported: false,
      taxable: false,
      price: 14.99,
      quantity: 1,
      type: ''
    };

    const taxAmount = getTaxAmount(item, config);
    expect(taxAmount).to.equal(0);
  });

  it('should get correct tax amount for imported items not in excepted categories', () => {
    const item: OrderItemModel = {
      taxable: true,
      imported: true,
      price: 14.99,
      quantity: 1,
      type: ''
    };

    const taxAmount = getTaxAmount(item, config);
    expect(taxAmount).to.equal(2.2485);
  });

  it('should get correct tax amount for imported items in excepted categories', () => {
    const item: OrderItemModel = {
      imported: true,
      taxable: false,
      price: 14.99,
      quantity: 1,
      type: ''
    };

    const taxAmount = getTaxAmount(item, config);
    expect(taxAmount).to.equal(0.7495);
  });
});
