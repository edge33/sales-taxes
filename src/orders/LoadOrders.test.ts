import { expect } from 'chai';
import { ConfigModel } from '../ConfigModel';
import { loadOrders } from './LoadOrders';

describe('LoadOrders tests...', () => {
  const config: ConfigModel = {
    baseTaxesPercentage: 10,
    exceptedCategories: ['books', 'food', 'medicals'],
    importTaxPercentage: 5
  };

  it('should check that loadOrders returns correct results', () => {
    const data = [
      '1 book at 12.49',
      '1 music CD at 14.99',
      '1 chocolate bar at 0.85',
      '',
      '1 imported box of chocolates at 10.00',
      '1 imported bottle of perfume at 47.50',
      '',
      '1 imported bottle of perfume at 27.99',
      '1 bottle of perfume at 18.99',
      '1 packet of headache pills at 9.75',
      '1 imported box of chocolates at 11.25',
      ''
    ];
    const orders = loadOrders(data, config);
    expect(orders.length).to.equal(3);
  });

  it('should correctly load taxable products', () => {
    const data = ['1 music CD at 12.49', ''];
    const orders = loadOrders(data, config);
    expect(orders[0].items[0].taxable).to.equal(true);
  });

  it('should correctly load non-taxable products', () => {
    const data = ['1 book at 12.49', ''];
    const orders = loadOrders(data, config);
    expect(orders[0].items[0].taxable).to.equal(false);
  });

  it('should correctly load taxable imported products', () => {
    const data = ['1 imported music CD at 12.49', ''];
    const orders = loadOrders(data, config);
    expect(orders[0].items[0].taxable).to.equal(true);
    expect(orders[0].items[0].imported).to.equal(true);
  });

  it('should correctly load non-taxable imported products', () => {
    const data = ['1 imported book at 12.49', ''];
    const orders = loadOrders(data, config);
    expect(orders[0].items[0].taxable).to.equal(false);
    expect(orders[0].items[0].imported).to.equal(true);
  });
});
