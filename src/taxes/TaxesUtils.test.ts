import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import DataLayer from '../data/DataLayer';
import { ItemModel } from '../items/ItemModel';
import { getTaxAmount } from './TaxesUtils';

describe('TaxesUtils tests...', () => {
  it('should get correct tax amount for items not in excepted categories', () => {
    sinon.stub(DataLayer, 'getConfig').returns({
      baseTaxesPercentage: 10,
      exceptedCategories: ['books', 'food', 'medicals'],
      importTaxPercentage: 5
    });

    const item: ItemModel = {
      category: 'music',
      imported: false,
      name: 'a cd',
      price: 14.99,
      quantity: 1,
      type: ''
    };

    const taxAmount = getTaxAmount(item);
    expect(taxAmount).to.equal(1.499);
    (DataLayer.getConfig as SinonStub).restore();
  });

  it('should return 0 as tax amount for items in excepted categories', () => {
    sinon.stub(DataLayer, 'getConfig').returns({
      baseTaxesPercentage: 10,
      exceptedCategories: ['books', 'food', 'medicals'],
      importTaxPercentage: 5
    });

    const item: ItemModel = {
      category: 'books',
      imported: false,
      name: 'a cd',
      price: 14.99,
      quantity: 1,
      type: ''
    };

    const taxAmount = getTaxAmount(item);
    expect(taxAmount).to.equal(0);
    (DataLayer.getConfig as SinonStub).restore();
  });

  it('should get correct tax amount for imported items not in excepted categories', () => {
    sinon.stub(DataLayer, 'getConfig').returns({
      baseTaxesPercentage: 10,
      exceptedCategories: ['books', 'food', 'medicals'],
      importTaxPercentage: 5
    });

    const item: ItemModel = {
      category: 'music',
      imported: true,
      name: 'a cd',
      price: 14.99,
      quantity: 1,
      type: ''
    };

    const taxAmount = getTaxAmount(item);
    expect(taxAmount).to.equal(2.2485);
    (DataLayer.getConfig as SinonStub).restore();
  });

  it('should get correct tax amount for imported items in excepted categories', () => {
    sinon.stub(DataLayer, 'getConfig').returns({
      baseTaxesPercentage: 10,
      exceptedCategories: ['books', 'food', 'medicals'],
      importTaxPercentage: 5
    });

    const item: ItemModel = {
      category: 'books',
      imported: true,
      name: 'a cd',
      price: 14.99,
      quantity: 1,
      type: ''
    };

    const taxAmount = getTaxAmount(item);
    expect(taxAmount).to.equal(0.7495);
    (DataLayer.getConfig as SinonStub).restore();
  });
});
