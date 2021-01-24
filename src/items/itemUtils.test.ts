import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import DataLayer from '../data/DataLayer';
import { OrderItemModel } from '../orders/OrderModel';
import { getItemFromOrder } from './ItemUtils';

describe('ItemsUtils tests...', () => {
  it('should check that getItemFromOrder returns undefined when no order is passed', () => {
    sinon.stub(DataLayer, 'getItems').returns([]);
    const items = getItemFromOrder({} as OrderItemModel);
    expect(items).to.equal(undefined);
    (DataLayer.getItems as SinonStub).restore();
  });

  it('should check that getItemFromOrder returns correct items from the store', () => {
    sinon.stub(DataLayer, 'getItems').returns([
      {
        category: 'category',
        price: 1.1,
        imported: false,
        name: '',
        quantity: 1,
        type: 'book'
      },
      {
        category: 'category',
        price: 2.0,
        imported: false,
        name: '',
        quantity: 1,
        type: 'music'
      }
    ]);
    const items = getItemFromOrder({ type: 'book', quantity: 1, price: 1.1 });
    expect(items).to.deep.equal({
      category: 'category',
      price: 1.1,
      imported: false,
      name: '',
      quantity: 1,
      type: 'book'
    });
    (DataLayer.getItems as SinonStub).restore();
  });
});
