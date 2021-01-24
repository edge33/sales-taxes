import { expect } from 'chai';
import { buildReceipts } from './ReceiptUtils';
import { ConfigModel } from '../ConfigModel';
import { OrderModel } from '../orders/OrderModel';

describe('ReceiptUtils tests...', () => {
  const config: ConfigModel = {
    baseTaxesPercentage: 10,
    exceptedCategories: ['books', 'food', 'medicals'],
    importTaxPercentage: 5
  };

  it('should compute corret receipt for taxable item', () => {
    const orders: OrderModel[] = [
      {
        items: [
          {
            imported: false,
            taxable: true,
            price: 14.99,
            quantity: 1,
            type: ''
          }
        ]
      }
    ];
    const receipts = buildReceipts(orders, config);
    expect(receipts[0].orderData[0].price.toFixed(2)).to.equal('16.49');
  });

  it('should compute corret receipt for non-taxable item', () => {
    const orders: OrderModel[] = [
      {
        items: [
          {
            imported: false,
            taxable: false,
            price: 14.99,
            quantity: 1,
            type: ''
          }
        ]
      }
    ];
    const receipts = buildReceipts(orders, config);
    expect(receipts[0].orderData[0].price.toFixed(2)).to.equal('14.99');
  });

  it('should compute corret receipt for taxable imported item', () => {
    const orders: OrderModel[] = [
      {
        items: [
          {
            imported: true,
            taxable: true,
            price: 14.99,
            quantity: 1,
            type: ''
          }
        ]
      }
    ];
    const receipts = buildReceipts(orders, config);
    expect(receipts[0].orderData[0].price.toFixed(2)).to.equal('17.24');
  });

  it('should compute corret receipt for non-taxable imported item', () => {
    const orders: OrderModel[] = [
      {
        items: [
          {
            imported: true,
            taxable: false,
            price: 14.99,
            quantity: 1,
            type: ''
          }
        ]
      }
    ];
    const receipts = buildReceipts(orders, config);
    expect(receipts[0].orderData[0].price.toFixed(2)).to.equal('15.74');
  });

  it('should compute corret the correct total amount of taxes and price', () => {
    const orders: OrderModel[] = [
      {
        items: [
          {
            imported: true,
            taxable: false,
            price: 14.99,
            quantity: 1,
            type: ''
          },
          {
            imported: true,
            taxable: false,
            price: 12.99,
            quantity: 1,
            type: ''
          }
        ]
      }
    ];
    const receipts = buildReceipts(orders, config);
    expect(receipts[0].totalPrice.toFixed(2)).to.equal('29.38');
    expect(receipts[0].totalTaxAmount.toFixed(2)).to.equal('1.40');
  });
});
